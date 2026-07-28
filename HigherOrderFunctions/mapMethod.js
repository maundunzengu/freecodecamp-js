// Before using map (using a for loop)

const numbers = [1,2,3,4,5,6];
const doubled = [];

for(let i = 0; i < numbers.length; i++) {
	doubled.push(numbers[i] * 2);
}

console.log(doubled);


// map() = take an array => change each item => return a new array
// map() with a regular function


const numberz = [1,2,3,4,5];
const double = numberz.map(function(num) {
	return num * 2;

});

console.log(double);


//map using arrow function

const number = [1,2,3,4,5];
const doubl = number.map(num => num *2);

console.log(doubl);
