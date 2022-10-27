let fs = require('fs');
let [ A, B, C, D ] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

let answer = Math.abs((A + D) - (B + C)); 
console.log(answer);