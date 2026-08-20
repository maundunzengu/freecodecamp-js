// 0(n**2) Quadratic Time


//A loop inside a loop, both sealing with n.

function hasDuplicates(arr) {
	for(let i = 0; i < arr.length; i++) {
		for(let j = i + 1; j < arr.length; j++) {
			if(arr[i] === arr[j]) return true;
		}
	}
	return false;
}

// For every element, you compare it against every element. 10 elements - 100 comparisons. This is why nested loops over the same data are usually a red flag for performance.


console.log(hasDuplicates([1,2,3,4,5,6,2,4]));
