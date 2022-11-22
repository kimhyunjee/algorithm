const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const [A, B, C] = [input[0], input[1], input[2]];

let a = Math.floor(A/(C-B)) + 1;

B >= C ? console.log(-1) : console.log(a);