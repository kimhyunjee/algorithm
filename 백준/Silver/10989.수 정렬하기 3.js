
const { resourceUsage } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map((x) => +x)
const n = input[0];
input.splice(0, 1);
console.log(input)
const max = Math.max(...input);
let newArr = Array(max).fill(0);
let count = 0;


for (let i = 0; i <= max; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j] === i) {
      count++;
    }
  }
  newArr[i] = count;
  if (count !== 0) {
    for (let k = 0; k < newArr[i]; k++) {
      console.log(i);
    }
  }
  count = 0;
}
