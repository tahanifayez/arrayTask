// task 1
let Array = [];
let myArray = ["apple", "banana", "cherry"];

console.log(myArray[0]); // [] not () :)
console.log(myArray[myArray.length - 1]);
myArray.push("mango");
console.log(myArray);
myArray.unshift("mango");
console.log(myArray);
myArray.pop();
console.log(myArray);
const numbers = [5, 10, 15, 20, 25];
numbers.splice(2, 1);
console.log(numbers);

function arr(yourArray) {
  return yourArray.length();
}

const temperatures = [72, 68, 74, 80, 76];
temperatures.sort();
console.log(temperatures);
let max = temperatures.pop();
console.log(max);
if (myArray.includes("banana")) return console.log(true);
else return console.log(false);

// end task 1

// task 2
isArrayLengthOdd(numbers);
function isArrayLengthOdd(numbers) {
  if (numbers.length % 2 != 0) return ture;
  else return false;
} // end fun 1
isArrayEven(numbers);
function isArrayEven(numbers) {
  if (numbers.length % 2 == 0) return true;
  else return false;
}
instructors = ["Mashary", "hanan"];
function addLailaToArray(instructors) {
  instructors.push("laila");
  console.log(instructors);
}
addLailaToArray(instructors);
teams = ["Brazil", "Germany", "Italy"];
function eliminateTeam(teams) {
  return teams.pop();
}
eliminateTeam(teams);

let fruits = ["apple", "orange", "banana", "kiwi"];
function secondHalfOfArrayIfItIsEven(f) {
  if (f.length % 2 != 0) console.log((f = []));
  else console.log(f.slice(f.length / 2, f.length));
}
secondHalfOfArrayIfItIsEven(fruits);

function youGottaCalmDown(shout) {}

// loopsssssssssss

for (let count = 1; count >= 10; count++) {
  console.log(count);
}

for (let count = 2; count >= 20; count + 2) {
  console.log(count);
}

let i = 1;
let sum = 0;
while (i <= 100) {
  sum += i;
  i++;
}

for (let count = 0; count <= numbers.length - 1; count++) {
  sum += numbers[count];
}
