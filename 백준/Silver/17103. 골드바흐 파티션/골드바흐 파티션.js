const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((item) => Number(item));

const iter = input.shift();

let maxNum = Math.max(...input);
let answer = "";

// maxNum까지의 소수 구하기
let prime = new Array(maxNum + 1).fill(true);
prime[0] = false;
prime[1] = false;

for(let i = 2; i <= (maxNum / 2); i++){
    if(prime[i]){
        for(let j = 2; j <= (maxNum / i); j++){
            prime[i * j] = false;
        }
    }
}

input.forEach((item) => { 
    let count = 0;
    for(let i = 2; i <= (item / 2); i++){        
        if(prime[i] && prime[item - i]){
            count++;
        }
    }
    
    answer += `${count}\n`;
})

console.log(answer);