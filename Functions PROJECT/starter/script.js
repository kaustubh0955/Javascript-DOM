'use strict';
//Default Parameters
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES%
  //numPassengers = numPassengers || 1;
  //price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
//How Passing Arguments Works
//Value vs Reference
const flight = 'LH234';
const kaus = {
  name: 'Kaustubh Rai',
  passport: 2345678456,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 2345678456) {
    alert('Check In');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, kaus);
console.log(flight);
console.log(kaus);

//Is the same as doing...
const flightNum = flight;
const passenger = kaus;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(kaus);
checkIn(flight, kaus);

//Function accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order functions

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the Best!', upperFirstWord);
transformer('Javascript is the Best', oneWord);

//Example
const runs = function (batsman, out) {
  console.log(`Original news:${batsman}`);
  console.log(`Fake news: ${out(batsman)}`);

  console.log(`The news was given by: ${out.bowler}`);
};

//JS uses callbacks all the time
const high5 = function () {
  console.log('🖐️');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

//Functions returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Kaustubh');

const greett = greetings => {
  return names => {
    console.log(`${greetings} ${names}`);
  };
};
const greeters = greett('Hello');
greeters('Hesha');


//----------------------------BIND METHOD-----------------------------

const eurowings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};
//book.call(eurowings,23,'Sara Williams');

const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Kaustubh Rai');

//Partial application
//means we can preset parameters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT=value=>value+value*0.23;

console.log(addVAT(100));
console.log(addVAT(23));

 */
//Closures
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount}passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

//Some examples of closure
//Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
//Reassigning f functions
h();
f();
console.dir(f);

//Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups,each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait}seconds`);
};
boardPassengers(180, 3);
