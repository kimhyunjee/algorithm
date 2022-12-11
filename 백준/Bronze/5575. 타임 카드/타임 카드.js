const fs = require('fs');
const [a, b, c] = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const timeConvert = (time) => {
  let startTime = 0;
  let endTime = 0;
  for(let i = 0; i<time.length; i++) {
    if(i < 3) {
      if(i === 0) startTime += time[i] * 60 * 60
      if(i === 1) startTime += time[i] * 60
      if(i === 2) startTime += time[i]
    }

    if (i >= 3) {
      if(i === 3) endTime += time[i] * 60 *60
      if(i === 4) endTime += time[i] * 60
      if(i === 5) endTime += time[i]
    } 
  }
  let totalT = endTime - startTime;
  let totalH = parseInt((totalT / 3600) % 24)
  let totalM = parseInt((totalT / 60) % 60)
  let totalS = totalT % 60
  
  return [totalH, totalM, totalS];
}

console.log(...timeConvert(a.split(' ').map(Number)));
console.log(...timeConvert(b.split(' ').map(Number)));
console.log(...timeConvert(c.split(' ').map(Number)))