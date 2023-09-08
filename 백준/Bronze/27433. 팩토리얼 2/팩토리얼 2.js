const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const result = factorial(N);
console.log(result);
