const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const findMaxValue = matrix =>
    matrix.reduce((acc, row, i) =>
        row.reduce((max, value, j) => {
            if (value > max.value) {
                return { value, i, j };
            }
            return max;
        }, acc)
    , { value: -1 });

function main() {
    const matrix = input.map(row => row.split(' ').map(Number));
    const { value, i, j } = findMaxValue(matrix);

    console.log(value);
    console.log(i + 1, j + 1);
}

main();
