const [N, ...score] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(v => +v);
let count = 0;
for (let i=N-1; i>0; i--) {
    if (score[i-1] >= score[i]) {
        count += score[i-1] - score[i] + 1;
        score[i-1] = score[i] - 1;
    }
}
console.log(count);