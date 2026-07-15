let counter = 0;
while(counter < 5) {
	console.log(counter);
	counter++
}




let steps = 0;
do{
	console.log(steps);
	steps++;
}
while(steps < 5)




let str = "JavaScript";
for(letters of str) {
	console.log(letters)
}


let obj = {name: "Jesse", age: 21};
for(prop in obj) {
	console.log(obj[prop])
}

let fruits = ["apples", "mangos", "grapes"];
let berries = ["watermelon", "peas"];
fruits.push(berries);
console.log(fruits);
console.log(fruits[3][0]);

let myArray = [];
for(let i=1; i<9; i+=2) {
	if (i%2 !=0) {
		console.log(i)
	}
	myArray.push(i)
}
console.log(myArray)




