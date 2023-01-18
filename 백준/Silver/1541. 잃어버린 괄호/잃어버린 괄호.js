const answer = input => {
  const getSum = arr => {
    return arr.split(/[\+-]/).map(v => +v).reduce((acc, n) => acc + n, 0);
  }
  const firstMinus = input.indexOf('-');
  if (firstMinus === -1) {
    console.log(getSum(input));
  } else {
    const plus = getSum(input.slice(0, firstMinus));
    const minus = getSum(input.slice(firstMinus+1));
    console.log(plus - minus);
  }
};

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
answer(input);