let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
var a = parseInt(input[0]);
var b = input[1].split(" ");

// console.log(a)
// console.log(b)

ty=0
tm=0

for (i=0;i<a;i++) {
  x=b.map(Number)
  aaa=parseInt(x[i])
  ty+=parseInt(aaa/30+1)*10
  tm+=parseInt(aaa/60+1)*15
}
if (ty>tm) {
  console.log(`M ${tm}`)
}else if ( ty<tm ) {
  console.log(`Y ${ty}`)
}else 
console.log(`Y M ${ty}`)