// Question bank for the 4th of July Quiz Showdown, organized into volumes.
// Each question: category, question text, 4 options, index of correct option,
// a hand-written "narration" script (used to generate the pre-recorded audio
// in audio/v<N>/), and a "fact" shown after reveal.
const QUIZ_VOLUMES = {
  1: [
    {
      category: "History",
      question: "Which of the original 13 colonies did NOT send delegates to the First Continental Congress in 1774?",
      options: ["Georgia", "Rhode Island", "Delaware", "New Jersey"],
      correct: 0,
      narration: "Alright partners, here's a sneaky one to kick things off. Which of the original thirteen colonies did NOT send delegates to the First Continental Congress back in 1774? Was it A, Georgia... B, Rhode Island... C, Delaware... or D, New Jersey?",
      fact: "Georgia stayed home hoping for British help against Native American raids — the only colony to skip the meeting that kicked off organized resistance."
    },
    {
      category: "History",
      question: "Who was the oldest signer of the Declaration of Independence, at 70 years old?",
      options: ["Samuel Adams", "Benjamin Franklin", "John Hancock", "Roger Sherman"],
      correct: 1,
      narration: "Every posse's got an elder statesman. Who was the oldest signer of the Declaration of Independence, clocking in at seventy years old? A, Samuel Adams... B, Benjamin Franklin... C, John Hancock... or D, Roger Sherman?",
      fact: "The youngest signer, Edward Rutledge, was only 26."
    },
    {
      category: "Symbols",
      question: "The Liberty Bell was originally cast in which country, before cracking on its first test ring and being recast in Philadelphia?",
      options: ["France", "England", "Netherlands", "Spain"],
      correct: 1,
      narration: "Here's a fact most folks get wrong. The Liberty Bell was originally cast in which country, before it cracked on its very first test ring and had to be recast right here in Philadelphia? A, France... B, England... C, the Netherlands... or D, Spain?",
      fact: "Cast at London's Whitechapel Foundry in 1752, cracked almost immediately, then melted down and recast by Pass and Stow."
    },
    {
      category: "Aussie Roast",
      question: "Roughly how many convicts were aboard Britain's First Fleet when it landed in Australia in 1788?",
      options: ["About 300", "About 730", "About 1,200", "About 2,000"],
      correct: 1,
      narration: "Time to mosey on down under for a spell. Roughly how many convicts were aboard Britain's First Fleet when it landed in Australia back in 1788? A, about three hundred... B, about seven hundred thirty... C, about twelve hundred... or D, about two thousand?",
      fact: "Just over 1,400 people made the journey total, guarded by marines and officials."
    },
    {
      category: "Government",
      question: "Which Founding Father refused to sign the finished Constitution in 1787 because it lacked a Bill of Rights?",
      options: ["George Mason", "James Madison", "Alexander Hamilton", "Gouverneur Morris"],
      correct: 0,
      narration: "Not every founding father was happy with the final product, partner. Which one refused to sign the finished Constitution in 1787 because it was missing a Bill of Rights? A, George Mason... B, James Madison... C, Alexander Hamilton... or D, Gouverneur Morris?",
      fact: "One of only three delegates present at the convention's close who refused to sign."
    },
    {
      category: "Presidents",
      question: "Which president had the shortest term in office, dying just 31 days after his inauguration?",
      options: ["Zachary Taylor", "William Henry Harrison", "James Garfield", "Warren Harding"],
      correct: 1,
      narration: "Here's a rough one. Which president had the shortest term in office, passing away just thirty-one days after his inauguration? A, Zachary Taylor... B, William Henry Harrison... C, James Garfield... or D, Warren Harding?",
      fact: "Legend blames pneumonia from his marathon inauguration speech in the cold."
    },
    {
      category: "Presidents",
      question: "Which president is NOT one of the four faces carved into Mount Rushmore?",
      options: ["George Washington", "John Adams", "Abraham Lincoln", "Thomas Jefferson"],
      correct: 1,
      narration: "Time to squint up at some rock faces, partner. Which of these presidents is NOT one of the four carved into Mount Rushmore? A, George Washington... B, John Adams... C, Abraham Lincoln... or D, Thomas Jefferson?",
      fact: "The four are Washington, Jefferson, Theodore Roosevelt, and Lincoln."
    },
    {
      category: "Fireworks",
      question: "What is the actual technical name for the tube that launches an aerial firework shell into the sky?",
      options: ["A barrel", "A mortar", "A cannon", "A chute"],
      correct: 1,
      narration: "Let's talk shop about them fireworks. What's the actual technical name for the tube that launches an aerial firework shell up into the sky? A, a barrel... B, a mortar... C, a cannon... or D, a chute?",
      fact: "Pyrotechnicians line up steel or HDPE mortars in racks to launch each shell."
    },
    {
      category: "Aussie Roast",
      question: "What year did 'Advance Australia Fair' officially replace 'God Save the Queen' as Australia's national anthem?",
      options: ["1901", "1974", "1984", "2001"],
      correct: 2,
      narration: "Back down under one more time. What year did Advance Australia Fair officially replace God Save the Queen as Australia's national anthem? A, nineteen oh-one... B, nineteen seventy-four... C, nineteen eighty-four... or D, two thousand one?",
      fact: "Used informally since 1974, but not proclaimed official for another decade."
    },
    {
      category: "Fireworks",
      question: "Which metal salt gives fireworks their brilliant red color?",
      options: ["Barium", "Sodium", "Strontium", "Copper"],
      correct: 2,
      narration: "Now for some fireworks chemistry, partner. Which metal salt gives fireworks their brilliant red color? A, barium... B, sodium... C, strontium... or D, copper?",
      fact: "The same chemistry used in road flares."
    },
    {
      category: "Geography",
      question: "Which U.S. state has the longest coastline of any state, including tidal shoreline?",
      options: ["California", "Florida", "Alaska", "Louisiana"],
      correct: 2,
      narration: "Here's one that trips folks up every time. Which U.S. state has the longest coastline of any state, tidal shoreline and all? A, California... B, Florida... C, Alaska... or D, Louisiana?",
      fact: "Alaska's jagged coastline runs over 30,000 miles — dwarfing Florida's roughly 8,400."
    },
    {
      category: "Aussie Roast",
      question: "In which year did the Australia Act finally end the UK Parliament's ability to legislate for Australia?",
      options: ["1901", "1942", "1986", "1999"],
      correct: 2,
      narration: "Last trip down under, I promise. In which year did the Australia Act finally end the U.K. Parliament's power to legislate for Australia? A, nineteen oh-one... B, nineteen forty-two... C, nineteen eighty-six... or D, nineteen ninety-nine?",
      fact: "Two hundred and ten years after America cut the cord."
    },
    {
      category: "Geography",
      question: "What is the lowest point in the contiguous United States, at 282 feet below sea level?",
      options: ["Death Valley's Badwater Basin", "The Salton Sea", "New Orleans' 9th Ward", "Imperial Valley"],
      correct: 0,
      narration: "Let's head to the lowest spot in the country. What is the lowest point in the contiguous United States, sitting two hundred eighty-two feet below sea level? A, Death Valley's Badwater Basin... B, the Salton Sea... C, New Orleans' Ninth Ward... or D, the Imperial Valley?",
      fact: "It's also one of the hottest places on Earth — extremes in both directions."
    },
    {
      category: "Geography",
      question: "Which state was the last of the 50 to join the Union?",
      options: ["Alaska", "Hawaii", "Arizona", "New Mexico"],
      correct: 1,
      narration: "Almost home, partner. Which state was the last of the fifty to join the Union? A, Alaska... B, Hawaii... C, Arizona... or D, New Mexico?",
      fact: "Alaska joined in January 1959; Hawaii followed that August as the 50th state."
    },
    {
      category: "Food",
      question: "The winner of Nathan's Famous Hot Dog Eating Contest, held every July 4th at Coney Island, is awarded what?",
      options: ["A golden hot dog trophy", "The Mustard Belt", "A lifetime supply of hot dogs", "The Coney Island Cup"],
      correct: 1,
      narration: "Now for the important stuff, folks — food, and glory. The winner of Nathan's Famous Hot Dog Eating Contest, held every Fourth of July at Coney Island, is awarded what? A, a golden hot dog trophy... B, the Mustard Belt... C, a lifetime supply of hot dogs... or D, the Coney Island Cup?",
      fact: "An actual yellow championship belt, styled like a boxing title belt, mustard-colored and everything."
    },
    {
      category: "Food",
      question: "According to the National Hot Dog and Sausage Council, about how many hot dogs do Americans eat on July 4th alone?",
      options: ["15 million", "50 million", "150 million", "500 million"],
      correct: 2,
      narration: "Sticking with the important stuff. According to the National Hot Dog and Sausage Council, about how many hot dogs do Americans eat on July fourth alone? A, fifteen million... B, fifty million... C, a hundred fifty million... or D, five hundred million?",
      fact: "That's enough to stretch from D.C. to L.A. more than five times."
    },
    {
      category: "Symbols",
      question: "The Statue of Liberty was a gift to the United States from which country?",
      options: ["Spain", "France", "United Kingdom", "Netherlands"],
      correct: 1,
      narration: "Let's talk landmarks, partner. The Statue of Liberty was a gift to the United States from which country? A, Spain... B, France... C, the United Kingdom... or D, the Netherlands?",
      fact: "Dedicated in 1886, it celebrated the American Revolution and Franco-American friendship."
    },
    {
      category: "Pop Culture",
      question: "Which painter created the iconic patriotic image 'The Spirit of '76,' originally titled 'Yankee Doodle'?",
      options: ["Norman Rockwell", "Archibald Willard", "Grant Wood", "Emanuel Leutze"],
      correct: 1,
      narration: "Last one, and it's a classic. Which painter created the iconic patriotic image The Spirit of Seventy-Six, originally titled Yankee Doodle? A, Norman Rockwell... B, Archibald Willard... C, Grant Wood... or D, Emanuel Leutze?",
      fact: "It debuted at the 1876 Centennial Exposition and has been parodied endlessly ever since."
    }
  ],
  2: [
    {
      category: "History",
      question: "In what city did George Washington take his first oath of office as President, in 1789?",
      options: ["Philadelphia", "New York City", "Washington, D.C.", "Boston"],
      correct: 1,
      narration: "Let's rewind to the very beginning, partner. In what city did George Washington take his first oath of office as President, back in 1789? Was it A, Philadelphia... B, New York City... C, Washington, D.C.... or D, Boston?",
      fact: "Federal Hall in New York City hosted the ceremony — Washington, D.C. didn't even exist yet."
    },
    {
      category: "History",
      question: "Which signer of the Declaration of Independence was captured by the British and held prisoner during the Revolutionary War?",
      options: ["Richard Stockton", "John Hancock", "Samuel Adams", "Robert Morris"],
      correct: 0,
      narration: "Not every signer of the Declaration got off easy. Which signer was captured by the British and held prisoner during the Revolutionary War? A, Richard Stockton... B, John Hancock... C, Samuel Adams... or D, Robert Morris?",
      fact: "Stockton was captured by Loyalist raiders in late 1776 and harshly imprisoned; his health never fully recovered."
    },
    {
      category: "Government",
      question: "How many amendments have been added to the U.S. Constitution in total, including the Bill of Rights?",
      options: ["10", "17", "27", "33"],
      correct: 2,
      narration: "Here's a number most folks guess wrong. How many amendments have been added to the U.S. Constitution in total, counting the Bill of Rights? A, ten... B, seventeen... C, twenty-seven... or D, thirty-three?",
      fact: "The 27th and most recent amendment, about congressional pay, was ratified in 1992 — but was first proposed all the way back in 1789."
    },
    {
      category: "Aussie Roast",
      question: "Which two animals appear on Australia's Coat of Arms, chosen partly because folklore says neither can walk backward?",
      options: ["The kangaroo and the emu", "The koala and the wombat", "The dingo and the kookaburra", "The platypus and the crocodile"],
      correct: 0,
      narration: "Time to mosey on down under, partner. Which two animals appear on Australia's Coat of Arms, chosen partly because folks say neither one can walk backward? A, the kangaroo and the emu... B, the koala and the wombat... C, the dingo and the kookaburra... or D, the platypus and the crocodile?",
      fact: "It's the traditional explanation for picking them: a nation that only moves forward."
    },
    {
      category: "Presidents",
      question: "Which president is the only one to later serve as Chief Justice of the Supreme Court?",
      options: ["William Howard Taft", "John Quincy Adams", "Andrew Johnson", "Rutherford B. Hayes"],
      correct: 0,
      narration: "Here's a career change nobody saw coming. Which president is the only one to later serve as Chief Justice of the Supreme Court? A, William Howard Taft... B, John Quincy Adams... C, Andrew Johnson... or D, Rutherford B. Hayes?",
      fact: "Taft served as the 27th President, then as the 10th Chief Justice from 1921 to 1930 — a job he reportedly preferred."
    },
    {
      category: "Presidents",
      question: "Which president never actually lived in the White House, since it wasn't finished during his term?",
      options: ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"],
      correct: 0,
      narration: "Here's a surprise for ya. Which president never actually lived in the White House, on account of it wasn't finished yet during his term? A, George Washington... B, John Adams... C, Thomas Jefferson... or D, James Madison?",
      fact: "The White House wasn't completed until 1800; John Adams was the first president to actually live there."
    },
    {
      category: "Fireworks",
      question: "In which city was the first organized Fourth of July fireworks display held, in 1777?",
      options: ["Boston", "Philadelphia", "New York City", "Charleston"],
      correct: 1,
      narration: "Let's talk tradition. In which city was the very first organized Fourth of July fireworks display held, back in 1777? A, Boston... B, Philadelphia... C, New York City... or D, Charleston?",
      fact: "Philadelphia marked the very first anniversary of independence with fireworks and a 13-gun salute."
    },
    {
      category: "Fireworks",
      question: "What's the name for the firework effect that leaves long, drooping, glittering trails in the sky, resembling a tree?",
      options: ["The fountain", "The willow", "The palm", "The chrysanthemum"],
      correct: 1,
      narration: "Sticking with fireworks. What's the name for the effect that leaves long, drooping, glittering trails in the sky, resembling a certain tree? A, the fountain... B, the willow... C, the palm... or D, the chrysanthemum?",
      fact: "A willow shell is packed with slow-burning stars that arc out and hang in the air like drooping branches."
    },
    {
      category: "Aussie Roast",
      question: "What beloved (or despised) yeast-based spread is a breakfast staple in Australia?",
      options: ["Vegemite", "Marmite", "Nutella", "Bovril"],
      correct: 0,
      narration: "Back down under for a taste test, partner. What beloved, or despised, yeast-based spread is a breakfast staple in Australia? A, Vegemite... B, Marmite... C, Nutella... or D, Bovril?",
      fact: "Australians spread it thin on toast; most Americans who try it spread it far too thick and regret it immediately."
    },
    {
      category: "Geography",
      question: "Which U.S. state borders only one other U.S. state?",
      options: ["Maine", "Florida", "Vermont", "Rhode Island"],
      correct: 0,
      narration: "Here's a map trivia gem. Which U.S. state borders only one other state? A, Maine... B, Florida... C, Vermont... or D, Rhode Island?",
      fact: "Maine borders only New Hampshire among U.S. states — though it also borders Canada."
    },
    {
      category: "Geography",
      question: "Which U.S. state is the smallest of all 50 by total area?",
      options: ["Delaware", "Rhode Island", "Connecticut", "Hawaii"],
      correct: 1,
      narration: "Sticking with the map. Which U.S. state is the smallest of all fifty by total area? A, Delaware... B, Rhode Island... C, Connecticut... or D, Hawaii?",
      fact: "Rhode Island covers just 1,545 square miles, the smallest of all 50 states."
    },
    {
      category: "Aussie Roast",
      question: "Which country actually has more total land area: the United States, or Australia?",
      options: ["The United States", "Australia", "They're exactly equal", "Nobody's ever measured it"],
      correct: 0,
      narration: "One more reality check down under. Which country actually has more total land area: the United States, or Australia? A, the United States... B, Australia... C, they're exactly equal... or D, nobody's ever measured it?",
      fact: "The U.S., including Alaska, covers about 9.8 million square kilometers versus Australia's 7.7 million — turns out the 'land down under' is actually smaller."
    },
    {
      category: "Food",
      question: "Which iconic Fourth of July cookout condiment was launched by H.J. Heinz in 1876, the nation's centennial year?",
      options: ["Mustard", "Ketchup", "Relish", "Barbecue sauce"],
      correct: 1,
      narration: "Let's talk condiments, folks. Which iconic Fourth of July cookout condiment was launched by H. J. Heinz in 1876, the same year as the nation's centennial? A, mustard... B, ketchup... C, relish... or D, barbecue sauce?",
      fact: "H. J. Heinz introduced its tomato ketchup in 1876, right alongside the country's 100th birthday."
    },
    {
      category: "Symbols",
      question: "How many steps does it take to climb from the base of the Statue of Liberty to the crown?",
      options: ["154", "200", "354", "500"],
      correct: 2,
      narration: "Here's one for the history buffs. How many steps does it take to climb from the base of the Statue of Liberty to the crown? A, one hundred fifty-four... B, two hundred... C, three hundred fifty-four... or D, five hundred?",
      fact: "That's the equivalent of climbing a 22-story building."
    },
    {
      category: "Aussie Roast",
      question: "In what year did Australia's cricket team pull off the infamous 'underarm bowling incident' against New Zealand?",
      options: ["1975", "1981", "1990", "2005"],
      correct: 1,
      narration: "Last trip down under, partner, and it's a doozy. In what year did Australia's cricket team pull off the infamous underarm bowling incident against New Zealand, an act so shameful it's still brought up decades later? A, nineteen seventy-five... B, nineteen eighty-one... C, nineteen ninety... or D, two thousand five?",
      fact: "Trevor Chappell bowled the last ball of the match along the ground to stop New Zealand from tying it with a six — legal, but still considered poor sportsmanship to this day."
    },
    {
      category: "Pop Culture",
      question: "Coca-Cola's original 1886 recipe contained trace amounts of what ingredient, removed by around 1903?",
      options: ["Caffeine", "Cocaine", "Nicotine", "Morphine"],
      correct: 1,
      narration: "Here's a wild one about America's favorite soda. Coca-Cola's original eighteen eighty-six recipe contained trace amounts of what ingredient, removed by around nineteen-oh-three? A, caffeine... B, cocaine... C, nicotine... or D, morphine?",
      fact: "The original formula used coca leaf extract; by 1903 the company switched to a 'decocainized' version."
    },
    {
      category: "Government",
      question: "What is the minimum age required to serve as a United States Senator?",
      options: ["25", "30", "35", "40"],
      correct: 1,
      narration: "Let's talk qualifications, partner. What is the minimum age required to serve as a United States Senator? A, twenty-five... B, thirty... C, thirty-five... or D, forty?",
      fact: "The requirements are 30 for the Senate, 25 for the House, and 35 for President."
    },
    {
      category: "History",
      question: "Who served as the very first Chief Justice of the United States Supreme Court?",
      options: ["John Jay", "John Marshall", "John Adams", "Alexander Hamilton"],
      correct: 0,
      narration: "Last one for round two. Who served as the very first Chief Justice of the United States Supreme Court? A, John Jay... B, John Marshall... C, John Adams... or D, Alexander Hamilton?",
      fact: "Jay served from 1789 to 1795, appointed by George Washington himself."
    }
  ]
};
