const [count, input] = require('fs').readFileSync('/dev/stdin').toString().trim()
                .split('\n')

const answer = (count, input) => {
  input = input.split(' ').sort((a, b) => a - b)
  return input[0] * input[count-1]
}

console.log(answer(count, input))
