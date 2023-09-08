const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function isPossible(queue) {
    let current = 1;
    let temp = [];

    while (queue.length > 0 || temp.length > 0) {
        if (queue.length > 0 && queue[0] === current) {
            queue.shift();
            current++;
        } else if (temp.length > 0 && temp[temp.length - 1] === current) {
            temp.pop();
            current++;
        } else if (queue.length > 0) {
            temp.push(queue.shift());
        } else {
            return "Sad";
        }
    }

    return "Nice";
}

const n = parseInt(input[0]);
const queue = input[1].split(' ').map(Number);

const result = isPossible(queue);
console.log(result);
