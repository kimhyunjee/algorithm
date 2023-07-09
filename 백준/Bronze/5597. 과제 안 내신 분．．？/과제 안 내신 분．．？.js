const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const nums = input.map((num) => Number(num));
sol(nums);

function sol(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], 1);
  }

  for (let i = 1; i <= 30; i++) {
    if (!map.has(i)) {
      console.log(i);
    }
  }
}