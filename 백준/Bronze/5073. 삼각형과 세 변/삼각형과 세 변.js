const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    const sides = input[i].split(' ').map(Number);
    const [a, b, c] = sides.sort((x, y) => x - y);

    if (a === 0 && b === 0 && c === 0) {
        break;
    }

    if (a + b <= c) {
        console.log('Invalid');
    } else if (a === b && b === c) {
        console.log('Equilateral');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles');
    } else {
        console.log('Scalene');
    }
}
