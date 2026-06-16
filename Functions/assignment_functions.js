function greet(name) {
	return `Hello ${name}`;
}

console.log(greet("Isaac"));





function add(a, b) {
	return a + b;
}

console.log(add(5, -7));





function isEvens(number) {
	return number % 2 === 0;
}

console.log(isEvens(5));
console.log(isEvens(30));


const isEven = number => number % 2 === 2;
console.log(isEven(20));


function celsiusToFahrenheit (c) {
	return (c * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));


function introduce(name, age = 18) {
	return `My name is ${name} and I am ${age} years old.`
}

console.log(introduce("Isaac"));


const multiply = (a, b) => a * b;
console.log(multiply(4, 5));


function countVowel(string) {
	let vowels = "aeiou";
	return string.toLowerCase().split("").filter(c => vowels.includes(c)).length;
}

console.log(countVowel("Javascript"));
console.log(countVowel("rhythym"));
console.log(countVowel("hello"));

