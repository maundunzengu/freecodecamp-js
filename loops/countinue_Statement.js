for (let i = 1; i <= 10; i++) {
	if(i % 2 === 0) continue;
	console.log(i);
}

// Another example

const register = ["Alice", null, "Brian", null, "Ciku"];
for (const name of register) {
	if (name === null)continue;
               console.log(`Present: ${name}`);
}


