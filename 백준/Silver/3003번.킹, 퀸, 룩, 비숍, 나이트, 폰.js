const input = require("fs").readFileSync("/dev/stdin")
	.toString()
	.split(" ")
	.map((el) => Number(el));
let origin = [1, 1, 2, 2, 2, 8];
let answer = origin.map((el, idx) => el - input[idx]);

console.log(answer.join(' '));
