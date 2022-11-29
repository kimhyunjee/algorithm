const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const a = BigInt(input[1]);
const b = BigInt(input[2]);

console.log(String(a*b));