const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const a = Math.sqrt(3)*input*input/4;

console.log(a);
//삼각비 수학공식 활용