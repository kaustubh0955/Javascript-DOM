"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
//certain keywords can't be used in strict mode
//const interface
//const private
//const if=23;

//FUNCTIONS
//it's a piece of code that we can use over and over again in our code

function logger() {
  console.log("Kaustubh");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Function Declaration
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
  //return 2037-birthYear;
}

const dateBirth = calcAge1(2002);
console.log(dateBirth);

//Function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(2002);
console.log(dateBirth, age2);

//Arrow Functions

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

//Example
const YearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(YearsUntilRetirement(2002, "Kaustubh"));
console.log(YearsUntilRetirement(2004, "Hesha"));


//Functions calling other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(4, 5));

const calcAge1 = function (birthYear) {
  return 2023 - birthYear;
};

const YearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge1(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
  // return `${firstName} retires in ${retirement} years`;
};
console.log(YearsUntilRetirement(2002, "Kaustubh"));
console.log(YearsUntilRetirement(1950, "Mike"));


//Challenge1

const calcAverage = (a, b, c) => (a + b + c) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);


//..................ARRAYS............................

const friends = ["Michael", "Kaustubh", "Hesha", "Akinchay", "Kshitij"];
console.log(friends);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[0] = "Chaitanya";
console.log(friends);

//Exercise

const caclAge = function (birthYear) {
  return 2023 - birthYear;
};
const years = [1990, 1997, 2002, 2003, 2004];
const age1 = caclAge(years[0]);
const age2 = caclAge(years[1]);
const age3 = caclAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  caclAge(years[0]),
  caclAge(years[1]),
  caclAge(years[years.length - 1]),
];
console.log(ages);

//............Basic Array Operations/Methods..............
//Add elements
const friends = ["Michael", "Kaustubh", "Hesha", "Akinchay", "Kshitij"];
const newLength = friends.push("Chaitanya");
console.log(friends);
console.log(newLength);

friends.unshift("Gauri");
console.log(friends);

//Remove elements

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Hesha"));

console.log(friends.includes("Kaustubh"));


//Challenge 2

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);


//..............................Objects..............................

//Dot vs Bracket Notation

const kaus = {
  firstName: "Kaustubh",
  lastName: "Rai",
  age: 2023 - 2002,
  job: "student",
  friends: ["Hesha", "Akinchay", "Kshitij"],
};
console.log(kaus);

//Dot

console.log(kaus.lastName);

//Bracket
console.log(kaus["lastName"]);

const nameKey = "Name";
console.log(kaus["first" + nameKey]);
console.log(kaus["last" + nameKey]);

const interestedin = prompt(
  "What do you want to know about Kaustubh? Choose between firstName,lastName,age,job and friends"
);
if (kaus[interestedin]) {
  console.log(kaus[interestedin]);
} else {
  console.log("Wrong Request!");
}

kaus.location = "Lucknow";
kaus["instagram"] = "@kaustubh_27";
console.log(kaus);

console.log(
  `${kaus.firstName} has ${kaus.friends.length} friends, and his best friend is ${kaus.friends[0]}`
);


//Object Methods
const kaus = {
  firstName: "Kaustubh",
  lastName: "Rai",
  birthYear: 2002,
  job: "student",
  friends: ["Hesha", "Akinchay", "Kshitij"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      kaus.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license `;
  },
};

console.log(kaus.calcAge());
console.log(kaus.age);

//Challenge

console.log(kaus.getSummary());

//-----------------------LOOPS-----------------------------

for (let rep = 1; rep <= 10; rep++) {
  console.log("Lifting weights repetition", +rep);
}


//LOOP through arrays

const kaus = [
  "Kaustubh",
  "Rai",
  2023 - 2002,
  "student",
  ["Hesha", "Akinchay", "Kshitij", "Chinu"],
];
const types = [];
for (let i = 0; i < kaus.length; i++) {
  //Reading from jonas array
  console.log(kaus[i], typeof kaus[i]);
  //Filling types array
  //  types[i] = typeof kaus[i];
  types.push(typeof kaus[i]);
}
console.log(types);
*/
//continue and break
const kaus = [
  "Kaustubh",
  "Rai",
  2023 - 2002,
  "student",
  ["Hesha", "Akinchay", "Kshitij", "Chinu"],
];

for (let i = 0; i < kaus.length; i++) {
  if (typeof kaus[i] !== "string") continue;
  console.log(kaus[i], typeof kaus[i]);
}

for (let i = 0; i < kaus.length; i++) {
  if (typeof kaus[i] === "number") break;
  console.log(kaus[i], typeof kaus[i]);
}

for (let i = kaus.length - 1; i >= 0; i--) {
  console.log(kaus[i], typeof kaus[i]);
}
