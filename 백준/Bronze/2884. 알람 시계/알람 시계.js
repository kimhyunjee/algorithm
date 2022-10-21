let input = require("fs").readFileSync("dev/stdin").toString().trim().split(" ");

let h = Number(input[0])
let m = Number(input[1]);

if (m-45 < 0) {
  m = m-45+60;
  h=h-1;
}else {
  m= m-45;
}
  if (h === -1) {
      h = 23;
  }

console.log(h,m);