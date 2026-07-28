// Using the for loop for addition in an array

const numbers = [1,2,3,4];

let total = 0;

for(let i = 0; i < numbers.length; i++) {
	total += numbers[i];
}

console.log(total);





//reduce() = combine many => one
  //accumulator = your storage
  //current value = item you're processing now
  //return = updated storage
 

 // using reduce()


const numberz = [1,2,3,4,5];

const sum = numberz.reduce(function(accumulator, num) {
                return accumulator + num
},0);

console.log(total);
