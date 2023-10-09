const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function padovan(n) {
    const dp = [1, 1, 1];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 2] + dp[i - 3];
    }
    return dp[n - 1];
}

function main() {
    const T = parseInt(input[0]);
    for (let i = 1; i <= T; i++) {
        const N = parseInt(input[i]);
        console.log(padovan(N));
    }
}

main();
