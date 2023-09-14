const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function countTargetNumber(arr, target) {
    return arr.reduce((count, num) => (num === target ? count + 1 : count), 0);
}

function solution() {
    const N = parseInt(input[0]);
    const numbers = input[1].split(' ').map(Number);
    const V = parseInt(input[2]);

    const result = countTargetNumber(numbers, V);

    console.log(result);
}

solution();
