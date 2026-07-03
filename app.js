(function () {
  "use strict";

  const TOTAL = QUIZ_QUESTIONS.length;

  const state = {
    order: [],
    idx: 0,
    correctCount: 0,
    target: 15,
    answered: false
  };

  const voiceSettings = {
    voice: null,
    pitch: 0.8,
    rate: 0.9
  };

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
  const pitchSlider = document.getElementById("pitch-slider");
  const pitchValue = document.getElementById("pitch-value");
  const rateSlider = document.getElementById("rate-slider");
  const rateValue = document.getElementById("rate-value");
  const voiceSelect = document.getElementById("voice-select");

  totalValue.textContent = TOTAL;
  targetSlider.max = TOTAL;
  targetSlider.value = Math.round(TOTAL * 0.625); // default ~15/24
  targetValue.textContent = targetSlider.value;

  targetSlider.addEventListener("input", () => {
    targetValue.textContent = targetSlider.value;
  });

  pitchSlider.addEventListener("input", () => {
    pitchValue.textContent = pitchSlider.value;
    voiceSettings.pitch = parseFloat(pitchSlider.value);
  });

  rateSlider.addEventListener("input", () => {
    rateValue.textContent = rateSlider.value;
    voiceSettings.rate = parseFloat(rateSlider.value);
  });

  // ---------- Voice selection ----------
  function scoreVoice(v) {
    let score = 0;
    const name = v.name.toLowerCase();
    if (v.lang === "en-US") score += 10;
    else if (v.lang.startsWith("en-US")) score += 8;
    else if (v.lang.startsWith("en")) score += 2;
    if (/male/.test(name) && !/female/.test(name)) score += 5;
    if (/(fred|aaron|gordon|reed|eric|samuel|tom|guy|alex)/.test(name)) score += 3;
    return score;
  }

  function populateVoices() {
    const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    if (!voices.length) return;

    const sorted = [...voices].sort((a, b) => scoreVoice(b) - scoreVoice(a));
    voiceSelect.innerHTML = "";
    sorted.forEach((v) => {
      const opt = document.createElement("option");
      opt.value = v.name;
      opt.textContent = `${v.name} (${v.lang})`;
      voiceSelect.appendChild(opt);
    });

    const saved = localStorage.getItem("quiz-voice-name");
    const match = sorted.find((v) => v.name === saved) || sorted[0];
    if (match) {
      voiceSelect.value = match.name;
      voiceSettings.voice = match;
    }
  }

  voiceSelect.addEventListener("change", () => {
    const voices = window.speechSynthesis.getVoices();
    voiceSettings.voice = voices.find((v) => v.name === voiceSelect.value) || null;
    localStorage.setItem("quiz-voice-name", voiceSelect.value);
  });

  if (window.speechSynthesis) {
    populateVoices();
    window.speechSynthesis.onvoiceschanged = populateVoices;
  }

  function speak(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    if (voiceSettings.voice) utter.voice = voiceSettings.voice;
    utter.pitch = voiceSettings.pitch;
    utter.rate = voiceSettings.rate;
    utter.lang = "en-US";
    window.speechSynthesis.speak(utter);
  }

  document.getElementById("btn-test-voice").addEventListener("click", () => {
    speak("Well now, welcome to the Fourth of July Quiz Showdown, partner. Let's see if y'all know your American history, or if you're all hat and no cattle.");
  });

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
    state.order = shuffle(QUIZ_QUESTIONS.map((_, i) => i));
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

  function currentQuestion() {
    return QUIZ_QUESTIONS[state.order[state.idx]];
  }

  function renderQuestion() {
    const q = currentQuestion();
    state.answered = false;

    progressEl.textContent = `Question ${state.idx + 1} / ${TOTAL}`;
    categoryEl.textContent = q.category;
    scoreEl.textContent = `✅ ${state.correctCount}/${TOTAL} · need ${state.target}`;
    questionTextEl.textContent = q.question;
    factEl.classList.add("hidden");
    factEl.textContent = "";
    nextBtn.classList.add("hidden");

    optionButtons.forEach((btn, i) => {
      btn.querySelector(".option-text").textContent = q.options[i];
      btn.classList.remove("correct", "wrong", "disabled");
      btn.disabled = false;
    });

    const optionsSpeech = q.options.map((o, i) => `${String.fromCharCode(65 + i)}: ${o}`).join(". ");
    speak(`Question ${state.idx + 1}. ${q.question} ... ${optionsSpeech}`);
  }

  replayBtn.addEventListener("click", () => {
    const q = currentQuestion();
    const optionsSpeech = q.options.map((o, i) => `${String.fromCharCode(65 + i)}: ${o}`).join(". ");
    speak(`${q.question} ... ${optionsSpeech}`);
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
        scoreEl.textContent = `✅ ${state.correctCount}/${TOTAL} · need ${state.target}`;
      }

      factEl.textContent = q.fact;
      factEl.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
    });
  });

  nextBtn.addEventListener("click", () => {
    state.idx++;
    if (state.idx >= state.order.length) {
      showResults();
    } else {
      renderQuestion();
    }
  });

  function showResults() {
    showScreen("results");
    const won = state.correctCount >= state.target;
    document.getElementById("results-headline").textContent = won ? "🎆 America Wins! 🎆" : "🦘 The Aussies Take This One 🦘";
    document.getElementById("results-score").textContent = `You got ${state.correctCount} / ${TOTAL} correct (needed ${state.target})`;
    document.getElementById("results-message").textContent = won
      ? "Fireworks well earned, partner. Go grill something."
      : "Y'all better hit the books before next year's rematch.";

    speak(won
      ? `Final score, ${state.correctCount} out of ${TOTAL}. Congratulations, America wins!`
      : `Final score, ${state.correctCount} out of ${TOTAL}. Tough break, partner. The Aussies take this one.`);
  }

  document.getElementById("btn-restart").addEventListener("click", () => {
    showScreen("setup");
  });

})();
