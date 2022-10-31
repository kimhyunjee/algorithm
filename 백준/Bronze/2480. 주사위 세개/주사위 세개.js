let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map((v) => +v);

const [a, b, c] = input;

function threeDice(first, second, third) {
  function twoSameDice(first, second, third) {
    if (first === second && first !== third) {
      return first;
    } else if (first === third && first !== second) {
      return first;
    } else if (second === third && second !== first) {
      return second;
    }
  }

  function theBiggestDice(first, second, third) {
    if (
      (first > second && second > third) ||
      (first > third && third > second)
    ) {
      return first;
    } else if (
      (second > first && first > third) ||
      (second > third && third > first)
    ) {
      return second;
    } else if (
      (third > first && first > second) ||
      (third > second && second > first)
    ) {
      return third;
    }
  }

  if (first === second && first === third && second === third) {
    return 10000 + first * 1000;
  } else if (first === second || first === third || second === third) {
    return 1000 + twoSameDice(first, second, third) * 100;
  } else if (first !== second && first !== third && second !== third) {
    return theBiggestDice(first, second, third) * 100;
  }
}

console.log(threeDice(a, b, c));