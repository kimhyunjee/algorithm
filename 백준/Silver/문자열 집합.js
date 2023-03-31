const input = require("fs").readFileSync("/dev/stdin").toString().split(/\s/);

const n = +input[0];
const arr1 = input.slice(2, n + 2);
const arr2 = input.slice(n + 2);

const set = new Set(arr1.map((v) => v));

let answer = 0;

arr2.forEach((value => {
  if (set.has(value)) ++answer
}))

console.log(answer)
