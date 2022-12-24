const [ , card, , check ] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

//시간복잡도 0 Set
const deck = new Set(card.split(' '));
const targets = check.split(' ');

let answer = [];
for(const target of targets) {
  deck.has(target) ?
    answer.push(1) :
    answer.push(0);
};

console.log(answer.join(' '));