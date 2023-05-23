const fs = require('fs');
let [ first, second ] = fs.readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
let rest = second
  .split(' ')
  .map(elem => parseInt(elem))
  .sort((a, b) => a - b);

let result = 0;


rest.reduce((acc, curr) => {
  const sum = acc + curr;
  result += sum;
  return sum;
}, 0);


console.log(result);