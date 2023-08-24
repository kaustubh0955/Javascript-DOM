'use strict';
//Constructor Function
//Arrow function will not as constructor functions
/*
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

//Object.create

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const kaus = Object.create(PersonProto);
console.log(kaus);
kaus.name = 'Kaustubh';
kaus.birthYear = 2002;
kaus.calcAge();

console.log(kaus.__proto__ === PersonProto);
const hesha = Object.create(PersonProto);
hesha.init('Hesha', 2004);
hesha.calcAge();

//Inheritance between classes: Constructor functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
//Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const hesha = new Student('Hesha', 2021, 'Computer Science');
hesha.introduce();
hesha.calcAge();

console.log(hesha.__proto__);
console.log(hesha.__proto__.__proto__);

console.log(hesha instanceof Student);
console.log(hesha instanceof Person);
console.log(hesha instanceof Object);

console.dir(Student.prototype.constructor);
//Inheritance between classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

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
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  calcAge() {
    console.log(
      `I'm ${
        2023 - this.birthYear
      } years old,but as a student i feel more like ${
        2023 - this.birthYear + 10
      }`
    );
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always need to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

//Inheritance between classes: Object.create
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const kaus = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const akinchay = Object.create(StudentProto);
akinchay.init('Kaustubh', 2012, 'Computer Science');
akinchay.introduce();
akinchay.calcAge();

*/
//Another Class Example

//Public fields
//Private fields
//Public methods
//Private methods

class Account {
  // 1)Public fields(instances)
  locale = navigator.language;
  // 2) Private Fields(instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected
    this.#pin = pin;
    //this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account,${owner}`);
  }

  //Public Interface
  //Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
  //Private Methods
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Kaustubh', 'Rupees', 1111);
console.log(acc1);

//acc1._movements.push(250);
//acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
//acc1.#approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
console.log(acc1.pin);

//console.log(acc1.#movements);
//console.log(acc1.#pin);
//Encapsulation:Protected Properties and Methods
//Encapsulation: Private class fields and methods
