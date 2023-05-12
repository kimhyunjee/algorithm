const input = require("fs").readFileSync("/dev/stdin").toString();

const answer = [];

for (let i = 97; i <= 122; i++) {
  answer.push(input.indexOf(String.fromCharCode(i)));
}

console.log(answer.join(" "));