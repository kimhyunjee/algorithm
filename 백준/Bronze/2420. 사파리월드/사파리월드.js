const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const [a,b] = [input[0], input[1]];
const answer = Math.abs(a-b);
console.log(answer);