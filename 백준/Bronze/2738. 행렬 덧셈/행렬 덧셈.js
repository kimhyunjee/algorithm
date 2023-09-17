const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function addMatrices(A, B) {
    return A.map((row, i) => row.map((num, j) => num + B[i][j]));
}

function main() {
    const [N, M] = input[0].split(' ').map(Number);

    const A = input.slice(1, N + 1).map(row => row.split(' ').map(Number));
    const B = input.slice(N + 1).map(row => row.split(' ').map(Number));

    const result = addMatrices(A, B);

    for (let i = 0; i < N; i++) {
        console.log(result[i].join(' '));
    }
}

main();
