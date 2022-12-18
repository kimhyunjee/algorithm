const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let n = Number(input);

let i = 1;
let sum = 1;

while (sum < n) {
  sum += 6 * i;
  i++;
}

console.log(i);