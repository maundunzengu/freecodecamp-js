function linearSearch(arr, target) {
	let comparisons = 0;

	for(let i = 0; i < arr.length; i++) {
		comparisons++

		console.log(`Comparison ${comparisons}: index ${i}`);
		
		if(arr[i] === target) {
			return i;
		}
	}

	console.log(`Total comparisons: ${comparisons}`);

	return -1;
}

const numbers = [4,9,1,7,3];

const result = linearSearch(numbers, 7);

console.log("Result", result);



