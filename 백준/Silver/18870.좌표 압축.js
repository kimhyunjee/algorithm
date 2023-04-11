const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const answer = input => {
  const N = +input[0]
  const arr = input[1].split(' ').map(v => Number(v))
  const set = [...new Set(arr)].sort((a, b) => a - b)

  console.log(arr.map(v => lowerBound(v)).join(' '))

  function lowerBound(target) {
    let [start, end] = [0, N]
    while (start < end) {
      const mid = Math.floor((start + end) / 2)
      if (set[mid] < target) start = mid + 1
      else end = mid
    }
    return start
  }
}

answer(input)
