const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const n = parseInt(input[0]);

const MOD = 1000000000;
const dp = new Array(n + 1).fill(null).map(() => new Array(10).fill(0));

for (let i = 1; i <= 9; i++) {
    dp[1][i] = 1;
}

for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= 9; j++) {
        if (j - 1 >= 0) {
            dp[i][j] += dp[i - 1][j - 1];
            dp[i][j] %= MOD;
        }
        if (j + 1 <= 9) {
            dp[i][j] += dp[i - 1][j + 1];
            dp[i][j] %= MOD;
        }
    }
}

let answer = 0;
for (let i = 0; i <= 9; i++) {
    answer += dp[n][i];
    answer %= MOD;
}

console.log(answer);