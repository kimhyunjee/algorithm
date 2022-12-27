const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);
const isDivisibleByThree = !(input.reduce((acc, v) => acc + v, 0) % 3);
const max = input.sort((a, b) => b - a).join('');
const isDivisibleByTen = max[max.length - 1] === '0';
const answer = isDivisibleByThree && isDivisibleByTen ? max : -1;
console.log(answer);