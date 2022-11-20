const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const price = Number(input);

const a = price*0.78;
const b = (price*0.8) + ((price*0.20)*0.78);

console.log(a, b);