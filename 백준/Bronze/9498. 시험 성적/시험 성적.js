const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

console.log(input>89?'A':input>79?'B':input>69?'C':input>59?'D':'F')