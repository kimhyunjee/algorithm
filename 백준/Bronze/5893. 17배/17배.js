const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let bin = "0b" + input;
const A = (BigInt(bin)*17n).toString(2);

console.log(A);