const fs = require('fs');
const [K, N, M] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const a = K*N;

console.log(a > M ? a - M : 0);