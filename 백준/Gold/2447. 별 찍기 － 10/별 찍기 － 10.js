const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);

function drawStars(x, y, size, starMap) {
    if (size === 1) {
        starMap[y][x] = '*';
        return;
    }

    const newSize = Math.floor(size / 3);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i !== 1 || j !== 1) {
                drawStars(x + i * newSize, y + j * newSize, newSize, starMap);
            }
        }
    }
}

const starMap = Array.from({ length: n }, () => Array(n).fill(' '));

drawStars(0, 0, n, starMap);

const result = starMap.map(row => row.join('')).join('\n');
console.log(result);
