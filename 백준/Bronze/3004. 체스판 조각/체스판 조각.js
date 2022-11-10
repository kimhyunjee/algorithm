const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const n = Number(input)
const r = Number(n/2);
const c = Number(n - r);

const answer = parseInt((r + 1) * (c + 1));
console.log(answer);