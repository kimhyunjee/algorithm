const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const caseCount = Number(input[0]);
const stack =  [];

for (let i = 1; i <= caseCount; i += 1) {
  const value = Number(input[i]);

  if (value === 0) {
    stack.pop();
  } else {
    stack.push(value);
  }
}

let answer = 0;

for (let i = 0; i < stack.length; i += 1) {
  answer += stack[i];
}

console.log(answer);