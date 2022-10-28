const fs = require('fs');

const [A, B, C, D, E, F] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const science = [A, B, C, D].sort((a, b) => b - a).map(Number);
const society = [E, F].sort((a, b) => b - a).map(Number);

science.pop();
society.pop();

const answer = science.reduce((a, c) => a + c) + society[0]

console.log(answer);