// named function
function greetings(name) {
	console.log(`Hello, ${name}!`);
}

greetings("Melissah");





// anonymous function
let same = function(name) {
	console.log("Hello " + name + "!");
}
same("Zeituni");



// Arrow function
let damm = (name) => {
	console.log("Hello " + name + "!");
}

damm("Hudson");

let intro = name => console.log("Hello my name is " + name + ".");
intro("Ruiz");


let calculation = (a, b) => a *b 
console.log(calculation(5, 7));


const calculateArea = (length, width) => {
	const area = length * width;
	return `The area of the rectangle is ${area} square units.`;
}

console.log(calculateArea(5, 10));
