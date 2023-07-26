const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


let [N, K] = input[0].split(' ').map(n=>parseInt(n));
let arr = input[1].split(' ').map(n=>parseInt(n));
let sum = arr.slice(0,K).reduce((acc,curnt)=>acc+curnt,0);
let answer = sum;
for(let i=0; i<(N-K); i++){
  sum += (arr[i+K]-arr[i]);
  if(sum>answer){
    answer = sum
  }
};
console.log(answer)