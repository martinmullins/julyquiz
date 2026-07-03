// Question bank for the 4th of July Quiz Showdown.
// Each question: category, question text, 4 options, index of correct option,
// a hand-written "narration" script (used to generate the pre-recorded audio
// in audio/), and a "fact" shown after reveal.
const QUIZ_QUESTIONS = [
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
];
