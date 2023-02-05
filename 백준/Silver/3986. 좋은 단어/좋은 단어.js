const [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let count = 0;
for (let word of arr) {
    const stack = [];
    for (let letter of word) {
        if (stack.length && stack[stack.length-1] === letter) {
            stack.pop();
        } else {
            stack.push(letter);
        }
    }
    if (stack.length === 0) count++;
}
console.log(count);