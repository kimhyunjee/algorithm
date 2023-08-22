const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const triangle = input.slice(1).map(row => row.split(' ').map(Number));

for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
        triangle[i][j] += Math.max(triangle[i+1][j], triangle[i+1][j+1]);
    }
}

console.log(triangle[0][0]);