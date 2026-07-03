// Question bank for the 4th of July Quiz Showdown.
// Each question: category, question text, 4 options, index of correct option, and a "fact" shown after reveal.
const QUIZ_QUESTIONS = [
  {
    category: "History",
    question: "In what year did the Continental Congress adopt the Declaration of Independence?",
    options: ["1774", "1776", "1781", "1789"],
    correct: 1,
    fact: "Adopted July 4, 1776 — though most delegates actually signed it weeks later, in August."
  },
  {
    category: "History",
    question: "Who is credited as the primary drafter of the Declaration of Independence?",
    options: ["Benjamin Franklin", "Thomas Jefferson", "John Adams", "James Madison"],
    correct: 1,
    fact: "Jefferson wrote the first draft; Franklin and Adams edited it before Congress got its hands on it."
  },
  {
    category: "History",
    question: "Which city hosted the Continental Congress that adopted the Declaration of Independence?",
    options: ["Boston", "Philadelphia", "New York City", "Williamsburg"],
    correct: 1,
    fact: "It happened in Pennsylvania's State House — now known as Independence Hall."
  },
  {
    category: "Symbols",
    question: "The Liberty Bell is world-famous for having a large what?",
    options: ["Crack", "Dent", "Bullet hole", "Rust stain"],
    correct: 0,
    fact: "It cracked sometime in the 1840s and hasn't rung properly since."
  },
  {
    category: "Aussie Roast",
    question: "In 1788, Britain's 'First Fleet' arrived Down Under carrying mostly what kind of settlers?",
    options: ["Convicts", "Cowboys", "Pilgrims", "Astronauts"],
    correct: 0,
    fact: "That's right — while America was founding a republic, Australia was founding a prison with a beach view."
  },
  {
    category: "Government",
    question: "The current U.S. Constitution was ratified in which year?",
    options: ["1776", "1783", "1788", "1812"],
    correct: 2,
    fact: "It replaced the shaky Articles of Confederation and took effect in 1789."
  },
  {
    category: "Presidents",
    question: "Which U.S. President served two non-consecutive terms, making him both the 22nd and 24th President?",
    options: ["Andrew Jackson", "Grover Cleveland", "Martin Van Buren", "William Taft"],
    correct: 1,
    fact: "Grover Cleveland lost re-election, sat out four years, then won it back in 1892."
  },
  {
    category: "Symbols",
    question: "What do the 13 stripes on the American flag represent?",
    options: ["The original 13 colonies", "13 major battles", "13 founding fathers", "13 amendments"],
    correct: 0,
    fact: "Betsy Ross gets the popular credit for the design, though historians still argue about it."
  },
  {
    category: "Symbols",
    question: "What do the 50 stars on the American flag represent?",
    options: ["The 50 states", "The 50 signers of the Constitution", "50 years of independence", "The original colonies plus 37 territories"],
    correct: 0,
    fact: "The 50-star flag has been official since Hawaii joined the Union in 1960."
  },
  {
    category: "Aussie Roast",
    question: "America declared independence in 1776. What year did Australia actually become a fully self-governing federation?",
    options: ["1788", "1850", "1901", "1986"],
    correct: 2,
    fact: "125 years after the cowboys sorted their independence, the kangaroos finally got the paperwork done."
  },
  {
    category: "Presidents",
    question: "Which of these presidents is NOT carved into Mount Rushmore?",
    options: ["George Washington", "John Adams", "Abraham Lincoln", "Thomas Jefferson"],
    correct: 1,
    fact: "The four faces are Washington, Jefferson, Theodore Roosevelt, and Lincoln — Adams never made the cut."
  },
  {
    category: "Fireworks",
    question: "What classic explosive compound gives fireworks their loud 'bang'?",
    options: ["Black powder", "Nitroglycerin", "TNT", "Napalm"],
    correct: 0,
    fact: "Black powder (gunpowder) has been the propellant and bang-maker in fireworks for centuries."
  },
  {
    category: "Fireworks",
    question: "Which metal salt gives fireworks their brilliant red color?",
    options: ["Barium", "Sodium", "Strontium", "Copper"],
    correct: 2,
    fact: "Strontium salts burn a deep red — the same chemistry used in road flares."
  },
  {
    category: "Fireworks",
    question: "Which metal produces the blue color in fireworks — famously the hardest color to get right?",
    options: ["Copper", "Calcium", "Iron", "Zinc"],
    correct: 0,
    fact: "Blue is notoriously unstable to produce, which is why good blue fireworks are a pyrotechnician's pride."
  },
  {
    category: "Aussie Roast",
    question: "In Australia, which side of the road do they drive on?",
    options: ["Left", "Right", "Middle", "Whichever's less crowded"],
    correct: 0,
    fact: "Left-hand side, just like their old colonial landlord. America picked the right side — because of course we did."
  },
  {
    category: "Geography",
    question: "Which U.S. city is home to the largest fireworks display in the country every July 4th (Macy's)?",
    options: ["Chicago", "New York City", "Los Angeles", "Washington, D.C."],
    correct: 1,
    fact: "Macy's fireworks over the East River regularly launch tens of thousands of shells."
  },
  {
    category: "Food",
    question: "According to the National Hot Dog and Sausage Council, about how many hot dogs do Americans eat on July 4th alone?",
    options: ["15 million", "50 million", "150 million", "500 million"],
    correct: 2,
    fact: "150 million hot dogs — enough to stretch from D.C. to L.A. more than five times."
  },
  {
    category: "Sports",
    question: "Which sport is traditionally nicknamed 'America's pastime'?",
    options: ["Basketball", "Football", "Baseball", "Hockey"],
    correct: 2,
    fact: "Baseball has carried that nickname since the 1800s, well before the NFL even existed."
  },
  {
    category: "Aussie Roast",
    question: "What do Australians call a backyard grill — and the whole event around it?",
    options: ["A barbie", "An esky", "A ute", "A bloke"],
    correct: 0,
    fact: "Aussies 'chuck a snag on the barbie' — Americans just call it Tuesday."
  },
  {
    category: "Symbols",
    question: "The Statue of Liberty was a gift to the United States from which country?",
    options: ["Spain", "France", "United Kingdom", "Netherlands"],
    correct: 1,
    fact: "Dedicated in 1886, it was a gift celebrating the American Revolution and Franco-American friendship."
  },
  {
    category: "Symbols",
    question: "The date on the tablet held by the Statue of Liberty, written in Roman numerals, marks what?",
    options: ["The date of French independence", "July 4, 1776", "The statue's dedication date", "The end of the Civil War"],
    correct: 1,
    fact: "It reads 'JULY IV MDCCLXXVI' — July 4, 1776."
  },
  {
    category: "Geography",
    question: "What is the highest point in the contiguous (lower 48) United States?",
    options: ["Denali", "Mount Whitney", "Mount Rainier", "Pikes Peak"],
    correct: 1,
    fact: "Mount Whitney in California tops out at 14,505 feet. Denali is taller, but it's in Alaska, so it doesn't count here."
  },
  {
    category: "Geography",
    question: "Which state was the last of the 50 to join the Union?",
    options: ["Alaska", "Hawaii", "Arizona", "New Mexico"],
    correct: 1,
    fact: "Alaska joined in January 1959; Hawaii followed that August as the 50th state."
  },
  {
    category: "Pop Culture",
    question: "Which classic American muscle car shares its name with a wild horse?",
    options: ["Chevy Camaro", "Dodge Charger", "Ford Mustang", "Pontiac Firebird"],
    correct: 2,
    fact: "The Mustang debuted in 1964 and became one of the best-selling American cars ever."
  }
];
