// test for in loop
for (const key in { a: 1, b: 2 }) {
	console.log(key);
}

// test array map function
const arr = [1, 2, 3];
arr.map((item): void => {
	console.log(item);
})