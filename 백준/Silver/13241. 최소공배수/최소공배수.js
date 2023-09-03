const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const [num1, num2] = input[0].split(' ').map(Number);

const result = lcm(num1, num2);
console.log(result);
