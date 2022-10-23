const input = require("fs").readFileSync("./dev/stdin").toString().split(" ")
  .map((el) => parseInt(el));

function sorting(arr) {
  let tmp = 0;

  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  return arr;
}

const Solution = (input) => {
  let answer = sorting(input).join(" ");
  console.log(answer);
};

Solution(input);