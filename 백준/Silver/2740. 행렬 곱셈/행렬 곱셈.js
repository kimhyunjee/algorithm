const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const matrixA = [];
for (let i = 1; i <= N; i++) {
    matrixA.push(input[i].split(' ').map(Number));
}

const [M2, K] = input[N + 1].split(' ').map(Number);
const matrixB = [];
for (let i = N + 2; i <= N + 1 + M2; i++) {
    matrixB.push(input[i].split(' ').map(Number));
}

function multiplyMatrix(A, B) {
    const result = new Array(A.length).fill(null).map(() => new Array(B[0].length).fill(0));

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B[0].length; j++) {
            for (let k = 0; k < B.length; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return result;
}


const resultMatrix = multiplyMatrix(matrixA, matrixB);

for (let i = 0; i < resultMatrix.length; i++) {
    console.log(resultMatrix[i].join(' '));
}
