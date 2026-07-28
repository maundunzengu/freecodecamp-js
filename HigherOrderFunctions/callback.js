function greet(name, action) {
	console.log("Hello " + name);
	action(); // what we want run that was passed
}

function sayGoodbye () {
	console.log("Goodbye!");
}

greet("Alex", sayGoodbye);

// What triggers the callback - A function reaching a certain point.

// inline fuction
greet("Alex", () => {
     console.log("Goodbye");
});
	
