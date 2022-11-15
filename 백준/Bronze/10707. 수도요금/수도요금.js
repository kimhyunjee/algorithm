const fs = require('fs');

const [x, yBasic, yUse, y, P] = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const X = x * P;
const Y = yUse < P ? yBasic + (y * (P - yUse)) : yBasic;

console.log(Math.min(X, Y));