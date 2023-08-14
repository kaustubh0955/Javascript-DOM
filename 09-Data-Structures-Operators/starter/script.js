'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const Hours = {
  openingHours: {
    mon: {
      open: 10,
      close: 23,
    },
    tue: {
      open: 9,
      close: 21,
    },
    wed: {
      open: 12,
      close: 24,
    },
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  Hours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery(starterIndex, mainIndex, time, address) {
    console.log(starterIndex, mainIndex, time, address);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is yourr delicious pasta with ${ing1},${ing2},${ing3}`);
  },
};
/*
//Looping Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}
//const ingredients = [
//  prompt("Let's make pasta! Ingredient 1?"),
//  prompt('Ingredient 2?'),
//prompt('Ingredient 3?'),
//];
//console.log(ingredients);
//restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
//restaurant.orderPasta(...ingredients);
/*
//Spread Operator
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Join 2 arrays

const joinArray = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(joinArray);

//Iterables

const str = 'Kaustubh';
const letters = [...str, '', 'R.'];
console.log(letters);
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole,21',
  mainIndex: 2,
  starterIndex: 2,
});
//Destructuring method

const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

const {
  name: restaurantName,
  categories: tags,
  openingHours: hours,
} = restaurant;
console.log(restaurantName, tags, hours);

const { menu = ['Pizza', 'Pasta'], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
/*

//Destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variable
//console.log(main,,secondary);
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 3, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);


//Rest Parameters

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

//Set
const orderSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(orderSet);

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
console.log(orderSet.add('Garlic Bread'));
console.log(orderSet.delete('Risotto'));
console.log(orderSet);

for (const order of orderSet) console.log(order);
//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set('Kaustubh').size);

//------------------MAPS:FUNDAMENTALS---------------------------------------
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze,Italy');
console.log(rest.set(2, 'Lisbon,Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

*/

//--------------------------------STRINGS---------------------------------
//Important

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capataliztion in name

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. I repeat Boarding door 23!';

console.log(announcement.replace(/door/g, 'gate'));

//Booleans

const planee = 'A230neo';
console.log(planee.includes('A320'));

console.log(planee.startsWith('B230'));
console.log(planee.endsWith('neo'));

//Split
console.log('a+very+nice+string'.split('+'));
console.log('Kaustubh Rai'.split(' '));

const [firstName, lastName] = 'Kaustubh Rai'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//Strings

const capatalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};
capatalizeName('jessica ann smith davis');
capatalizeName('jonas schedtmann');

//Padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(454636378273645));
console.log(maskCreditCard('343545464748748484746575484'));

//Repeat

const message2 = 'Bad weather...All Departues Delayed...';
console.log(message2.repeat(5));
