const fs = require('fs');

const [sum, substract] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const a = (sum + substract) / 2;
const b = sum - a;

if(a < 0 || b < 0 || Math.floor(a) !== a) {
    console.log(-1);
} else {
    console.log(a, b); 
}