const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift();
const dancers = new Set(); 

  for(let i = 0; i<input.length; i++){
    const [A,B] = input[i].split(' ') //1
    if(A === 'ChongChong' || B ==='ChongChong' || dancers.has(A)||dancers.has(B)){
      dancers.add(A)
      dancers.add(B)
    }
  }
  console.log(dancers.size)