'use strict';
/*
//Constructor Function
//Arrow function will not as constructor functions
const Person = function (firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never add a function in a constructor function
  // this.calcAge = function () {
  // console.log(2023 - this.birthYear);
  // };
};

const kaus = new Person('Kaustubh', 2002);
console.log(kaus);

// 1. New empty object is created
// 2. function is called, this={}
//this keyword will point to the new object pointing the function
// 3. {} linked to prototype
// 4. function automatically return {}

const hesha = new Person('Hesha', 2004);
const akinchay = new Person('Akinchay', 2003);
console.log(hesha, akinchay);
//kaus,hesha,akinhay are the instanc of a Person

console.log(kaus instanceof Person);

//Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
kaus.calcAge();
hesha.calcAge();
akinchay.calcAge();

console.log(kaus.__proto__);
console.log(kaus.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(kaus));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyprOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(kaus.species, hesha.species);

console.log(kaus.hasOwnProperty('firstName'));
console.log(kaus.hasOwnProperty('species'));

//Prototypal Inheritance

console.log(kaus.__proto__);

//Object.prototype(top of prototype chain)
console.log(kaus.__proto__.__proto__);
console.log(kaus.__proto__.__proto__.__proto__); //null

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 4, 5, 6, 9, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__); //null

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

//Coding Challenge 1

const Car = function (make, speed) {
  //Instance Properties
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const BMW = new Car('bmw', 120);
const Mercedes = new Car('mercedes', 95);

BMW.accelerate();
Mercedes.accelerate();
BMW.brake();
//ES6 Classes
//class expression

//const PersonCl=class {}

//class declaration

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Methods willbe added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
}

const kaus = new PersonCl('Kaustubh ', 2002);
console.log(kaus);
kaus.calcAge();
console.log(kaus.age);
console.log(kaus.__proto__ == PersonCl.prototype);

//PersonCl.prototype.greet = function () {
// console.log(`Hey ${this.firstName}`);
//};
kaus.greet();

// 1. Classes are not hoisted
// 2. Classes are first class citizens
// 3. Classes are executed in strict mode

//Getter and Setters

const walter = new PersonCl('Walter', 1965);

const account = {
  owner: 'Kaustubh',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
account.latest = 50;
console.log(account.movements);

*/
