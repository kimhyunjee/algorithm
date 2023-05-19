const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let caseCount = Number(input[0]);
let answer = '';

for (let i = 1; i <= caseCount; i++) {
  let count = Number(input[i].split(' ')[0]); 
  let cases = input[i].split(' ')[1];  
  
  for (let j = 0; j < cases.length; j++) {
    for (let k = 0; k < count; k++) {
      answer += cases[j];
    }
  }
  answer += '\n';
}

console.log(answer);