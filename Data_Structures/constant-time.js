
//0(1) Constant Time

// The number of operations never changes, no matter how big the input is.

// Whether arr has 5 elements or 5 million, this does exactly one operation grab the item at index 0. That's why the array access by index is 0(1)


function getFirstElement(arr) {
	return arr[0];
}

console.log(getFirstElement([10,20,30,40]));
