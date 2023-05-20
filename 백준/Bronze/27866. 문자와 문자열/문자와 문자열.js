const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let voca = input[0].toString();
let num = Number(input[1]);

console.log(voca[num-1])