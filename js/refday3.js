  
// JSON is what we change JS into in order to send somewhere or save it into local storage. This is an example of JSON
// "[{"name":"bob","gardenType":"sun","lunchPreference":"sandwich","experienceLevel":"beginner"}]"

// GOAL: save our dogArray into local storage and then get it back out

'use strict';
var dogArray = [];

function Dog(name, breed, hair, age, energy){
  this.name = name;
  this.breed = breed;
  this.hair = hair;
  this.age = age;
  this.energy = energy;

  dogArray.push(this);
}

new Dog('Paisley', 'Sheltie', 'Black', 4, 'Mellow');
new Dog('Austin', 'Yorkie', 'gray', 9, 'moderate');
new Dog('Wrigly', 'Pomeraniam', 'short', 10, 'up and down');
new Dog('Isis', 'Husky', 'medium-black', 5, 'high');
new Dog('Zero', 'Spanial', 'white and brown', 3, 'neurotic');

console.log('this is my original dogArray: ', dogArray);

// Step 1. Turn our dogArray into JSON

var stringDogs = JSON.stringify(dogArray);
// console.log('this is my JSON dogArray:', stringDogs);

// Step 2. Put my JSON dogArray into Local Storage
  // local storage take two values: a key - which can be anything - and a value - which is the JSON

localStorage.setItem('dogs', stringDogs);

// Step 3: Get my dogs out of local storage
  // getItems just takes the key

var whoLetTheDogsOut = localStorage.getItem('dogs');
// console.log('this is what I got back from Local Storage:', whoLetTheDogsOut);

// Step 4: Parse the dog array that I got back

var parsedDogs = JSON.parse(whoLetTheDogsOut);
console.log('my parsed Dogs:', parsedDogs);