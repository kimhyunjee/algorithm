const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

n = input[0];
let numbers = input[1].split(' ');
numbers = numbers.map((x) => Number(x));
const stack = [];

for (let i = 0; i < numbers.length; i++) {
  while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
    numbers[stack.pop()] = numbers[i];
  }
  stack.push(i);
}

while (stack.length) {
  numbers[stack.pop()] = -1;
}

console.log(numbers.join(' '));