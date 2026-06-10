
// An Anonymous function is a function without a name that can be assigned to a variable.

const sum = function(sum1, sum2) {
	return (sum1 + sum2);
}

console.log(sum(7, 4));

// The function is stored in a variable and called using that variable:





const greet = function() {
	console.log("Hello there!");
}

greet();

const calculate = function(a = 2, b = 3) {
	return a * b;
}

console.log(calculate()); // 6
console.log(calculate(4));// 12
console.log(calculate(4, 5));// 20

// ===


const logMessage = function() {
	console.log("This is an anonymous function");
 }

logMessage();



// Anonymous functions are often used inside other functions.
 // Example: inside setTimeout():

setTimeout(function() {
	console.log("Executed after 2 seconds");
}, 2000);



const fruits = ["apple", "mango", "banana"];

fruits.forEach(function(fruit) {
	console.log("Fruit:", fruit);
});

//map
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function(num) {
	return num * 2;
});


