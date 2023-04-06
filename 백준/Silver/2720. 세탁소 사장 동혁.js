const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

for (let i = 1; i <= +input[0]; i++) {
  const quarter = Math.floor(input[i] / 25);
  const dime = Math.floor((input[i] - quarter * 25) / 10);
  const nickel = Math.floor((input[i] - quarter * 25 - dime * 10) / 5);
  const penny = input[i] % 5;

  console.log(quarter, dime, nickel, penny);
}
