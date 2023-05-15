const input = require('fs').readFileSync('/dev/stdin').toString();

let wordsArr = input.trim().split(' '); 
let answer = 0;

for (let i = 0; i < wordsArr.length; i++) {
  if (wordsArr[i] !== '') {
    answer++;
  }
}

console.log(answer);