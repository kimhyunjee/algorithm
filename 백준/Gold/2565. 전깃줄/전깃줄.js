const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const poles = input.slice(1).map(line => line.split(' ').map(Number));

poles.sort((a, b) => a[0] - b[0]);

const stack = [];
for (const [_, end] of poles) {
  const idx = binarySearch(stack, end);
  if (idx === stack.length) {
    stack.push(end);
  } else {
    stack[idx] = end;
  }
}

const minRemovals = n - stack.length;
console.log(minRemovals);

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}