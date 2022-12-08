const fs = require('fs');

const [testCastNumber, ...thing] = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

for(let i = 0; i<testCastNumber; i++) {
  console.log(`$${parseFloat(thing[i] * 0.8).toFixed(2)}`);
}