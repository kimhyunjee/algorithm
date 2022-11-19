const fs = require('fs');

const [A, B, C, D, E] = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const burger = [ A, B, C ].sort((a, b) => b - a).pop();
const drink = [ D, E ].sort((a, b) => b - a).pop();

const set = burger + drink - 50;
console.log(set);