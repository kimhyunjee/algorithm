const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const numbers = input[1].split(' ').map(Number);

let maxSum = numbers[0];
let currentSum = numbers[0];

for (let i = 1; i < n; i++) {
  currentSum = Math.max(numbers[i], currentSum + numbers[i]);
  maxSum = Math.max(maxSum, currentSum);
}

console.log(maxSum);