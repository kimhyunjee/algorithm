let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
var a = parseInt(input[0]);
var b = input[1].split("");

let first = b[2]*a;
console.log(first);
let second = b[1]*a;
console.log(second);
let third = b[0]*a;
console.log(third);
console.log(first+second*10+third*100);