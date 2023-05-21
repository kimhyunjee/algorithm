const input = require('fs').readFileSync("/dev/stdin").toString().trim();

let N = +input;

let dp = [];
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2])%15746;
}
console.log(dp[N]);