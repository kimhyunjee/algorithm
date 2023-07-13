const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  console.log(input[i].substring(0, 1) + input[i].substring(input[i].length - 1, input[i].length));
}