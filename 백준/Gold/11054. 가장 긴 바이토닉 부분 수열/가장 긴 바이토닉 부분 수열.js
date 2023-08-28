const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number);

const lis = Array(n).fill(1);
for (let i = 1; i < n; i++)
  for (let j = 0; j < i; j++)
    if (arr[i] > arr[j]) lis[i] = Math.max(lis[i], lis[j] + 1);

const lds = Array(n).fill(1);
for (let i = n - 2; i >= 0; i--)
  for (let j = n - 1; j > i; j--)
    if (arr[i] > arr[j]) lds[i] = Math.max(lds[i], lds[j] + 1);

const maxLength = Math.max(...lis.map((l, i) => l + lds[i] - 1));
console.log(maxLength);