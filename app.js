(function () {
  "use strict";

  const state = {
    volume: 1,
    order: [],
    idx: 0,
    correctCount: 0,
    target: 15,
    answered: false
  };

  function activeQuestions() {
    return QUIZ_VOLUMES[state.volume];
  }

  function totalCount() {
    return activeQuestions().length;
  }

  // ---------- Screen helpers ----------
  const screens = {
    setup: document.getElementById("screen-setup"),
    quiz: document.getElementById("screen-quiz"),
    results: document.getElementById("screen-results")
  };

  function showScreen(name) {
    Object.values(screens).forEach((s) => s.classList.remove("active"));
    screens[name].classList.add("active");
  }

  // ---------- Setup screen ----------
  const targetSlider = document.getElementById("target-slider");
  const targetValue = document.getElementById("target-value");
  const totalValue = document.getElementById("total-value");
  const volumeButtons = Array.from(document.querySelectorAll(".volume-btn"));

  function syncTargetSliderToVolume() {
    const total = totalCount();
    totalValue.textContent = total;
    targetSlider.max = total;
    targetSlider.value = Math.round(total * 0.75);
    targetValue.textContent = targetSlider.value;
  }

  syncTargetSliderToVolume();

  targetSlider.addEventListener("input", () => {
    targetValue.textContent = targetSlider.value;
  });

  volumeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.volume = parseInt(btn.dataset.volume, 10);
      volumeButtons.forEach((b) => b.classList.toggle("active", b === btn));
      syncTargetSliderToVolume();
    });
  });

  // ---------- Narrator audio ----------
  // Pre-recorded lines (audio/v<N>/) rather than the browser's built-in TTS,
  // which sounds robotic and can't do a real character voice. The same
  // <audio> element is reused for every clip: once it's successfully played
  // from a direct user tap (Start / Hear the Narrator), Safari keeps allowing
  // .play() on it later even when triggered indirectly (e.g. after the eagle
  // transition's setTimeout), because the unlock is granted per-element.
  const narratorAudio = document.getElementById("narrator-audio");

  function playClip(src) {
    narratorAudio.pause();
    narratorAudio.src = `audio/${src}`;
    narratorAudio.currentTime = 0;
    narratorAudio.play().catch(() => {
      // Autoplay blocked (e.g. no user gesture yet) — silently ignore;
      // the Replay button lets the host retry with a direct tap.
    });
  }

  function questionAudioFile(arrayIndex) {
    return `v${state.volume}/q${String(arrayIndex + 1).padStart(2, "0")}.mp3`;
  }

  document.getElementById("btn-test-voice").addEventListener("click", () => {
    playClip(`v${state.volume}/intro.mp3`);
  });

  // ---------- Eagle transition ----------
  let audioCtx = null;

  function playScreech() {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === "suspended") audioCtx.resume();

      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(2600, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.35);
      osc.frequency.exponentialRampToValueAtTime(1800, now + 0.5);
      osc.frequency.exponentialRampToValueAtTime(700, now + 0.75);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.18, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

      osc.connect(gain).connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.8);
    } catch (e) {
      // Web Audio unsupported or blocked — the visual transition still plays fine without it.
    }
  }

  const eagleOverlay = document.getElementById("eagle-transition");

  function playEagleTransition(callback) {
    eagleOverlay.classList.remove("hidden");
    // Force reflow so the animation restarts every time the class is re-added.
    void eagleOverlay.offsetWidth;
    eagleOverlay.classList.add("active");
    playScreech();

    setTimeout(() => {
      eagleOverlay.classList.remove("active");
      eagleOverlay.classList.add("hidden");
      callback();
    }, 1100);
  }

  // ---------- Quiz flow ----------
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  document.getElementById("btn-start").addEventListener("click", () => {
    state.order = shuffle(activeQuestions().map((_, i) => i));
    state.idx = 0;
    state.correctCount = 0;
    state.target = parseInt(targetSlider.value, 10);
    showScreen("quiz");
    renderQuestion();
  });

  const progressEl = document.getElementById("question-progress");
  const categoryEl = document.getElementById("category-badge");
  const scoreEl = document.getElementById("score-tracker");
  const questionTextEl = document.getElementById("question-text");
  const optionButtons = Array.from(document.querySelectorAll(".option-btn"));
  const factEl = document.getElementById("fun-fact");
  const nextBtn = document.getElementById("btn-next");
  const replayBtn = document.getElementById("btn-replay");

  function currentArrayIndex() {
    return state.order[state.idx];
  }

  function currentQuestion() {
    return activeQuestions()[currentArrayIndex()];
  }

  function renderQuestion() {
    const q = currentQuestion();
    state.answered = false;

    progressEl.textContent = `Question ${state.idx + 1} / ${totalCount()}`;
    categoryEl.textContent = q.category;
    scoreEl.textContent = `✅ ${state.correctCount}/${totalCount()} · need ${state.target}`;
    questionTextEl.textContent = q.question;
    factEl.classList.add("hidden");
    factEl.textContent = "";
    nextBtn.classList.add("hidden");

    optionButtons.forEach((btn, i) => {
      btn.querySelector(".option-text").textContent = q.options[i];
      btn.classList.remove("correct", "wrong", "disabled");
      btn.disabled = false;
    });

    playClip(questionAudioFile(currentArrayIndex()));
  }

  replayBtn.addEventListener("click", () => {
    playClip(questionAudioFile(currentArrayIndex()));
  });

  optionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (state.answered) return;
      state.answered = true;
      const q = currentQuestion();
      const chosen = parseInt(btn.dataset.idx, 10);

      optionButtons.forEach((b, i) => {
        b.disabled = true;
        b.classList.add("disabled");
        if (i === q.correct) b.classList.add("correct");
        else if (i === chosen) b.classList.add("wrong");
      });

      if (chosen === q.correct) {
        state.correctCount++;
        scoreEl.textContent = `✅ ${state.correctCount}/${totalCount()} · need ${state.target}`;
      }

      factEl.textContent = q.fact;
      factEl.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
    });
  });

  nextBtn.addEventListener("click", () => {
    nextBtn.disabled = true;
    playEagleTransition(() => {
      nextBtn.disabled = false;
      state.idx++;
      if (state.idx >= state.order.length) {
        showResults();
      } else {
        renderQuestion();
      }
    });
  });

  function showResults() {
    showScreen("results");
    const won = state.correctCount >= state.target;
    document.getElementById("results-headline").textContent = won ? "🎆 America Wins! 🎆" : "🦘 The Aussies Take This One 🦘";
    document.getElementById("results-score").textContent = `You got ${state.correctCount} / ${totalCount()} correct (needed ${state.target})`;
    document.getElementById("results-message").textContent = won
      ? "Fireworks well earned, partner. Go grill something."
      : "Y'all better hit the books before next year's rematch.";

    playClip(won ? "win.mp3" : "lose.mp3");
  }

  document.getElementById("btn-restart").addEventListener("click", () => {
    showScreen("setup");
  });

})();
