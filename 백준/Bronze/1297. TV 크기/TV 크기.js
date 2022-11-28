const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const D = input[0];
const H = input[1];
const W = input[2];

const x = D/(H**2+W**2)**0.5

console.log(Math.floor(H*x), Math.floor(W* x));