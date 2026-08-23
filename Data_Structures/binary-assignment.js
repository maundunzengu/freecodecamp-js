function binarySearch(arr, target) {
	let low = 0;
	let high = arr.length - 1;

	while(low <= high) {
		const mid = Math.floor((low + high)/ 2);

		console.log(`low = ${low}, high = ${high}, mid = ${mid}`);

		if(arr[mid] === target) {
			console.log(`Target ${target} is found`)
			return mid
		} else if(arr[mid] < target) {
			console.log(`Search goes on the right half`);

			low = mid + 1;
		} else {
			console.log(`Search goes on the left half`)

			high = mid - 1;
		}
	}

	console.log(`Target ${target} not found`);

	return -1;
}

console.log(binarySearch([2,5,8,12,16,23,38,45], 23));
