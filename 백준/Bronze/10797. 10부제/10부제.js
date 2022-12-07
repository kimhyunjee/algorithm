const fs = require('fs');

const [day, week] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const answer = week.split(' ').filter(i => i === day).length;

console.log(answer);