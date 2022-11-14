const fs = require('fs');

const [month, day] = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const a = (month, day) => {
   //2월전후
  if(month > 2) return "After";
  if(month < 2) return "Before";
  //2월 18일전후, 2/18일 때
  if(month === 2) {
    if(day > 18) return "After";
    if(day < 18) return "Before";
    if(day === 18) return "Special"
  }
}

console.log(a(month, day));