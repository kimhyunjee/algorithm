const input = require('fs').readFileSync('/dev/stdin').toString();

let answer = 1;

for (let i = 1; i <= input * 1; i++) {
    answer *= i;
}

console.log(answer);