const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const p = Array(10001).fill(true);
p[0] = false;
p[1] = false;

for (let i = 2; i <= 100; i++) {
  for (let j = i * 2; j <= 10000; j += i) {
    p[j] = false;
  }
}

const answer = [];
for (let i = 1; i < input.length; i++) {
  const n = input[i];
  let left = right = n / 2;
  while (!p[left] || !p[right]) {
    left -= 1;
    right += 1;
  }
  answer.push(`${left} ${right}`);
}

console.log(answer.join('\n'));