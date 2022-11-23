const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const N = input[0];
const T = input[1];
const C = input[2];
const P = input[3];

const day = parseInt(N/T) === N/T ? parseInt(N/T) -1 : parseInt(N/T); 
const price = day*C*P;

console.log(price);