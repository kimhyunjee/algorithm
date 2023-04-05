const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let number = Number(input[0]);
let base = Number(input[1]);

console.log(number.toString(base).toUpperCase());
