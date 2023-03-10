const short = require("fs").readFileSync("/dev/stdin").toString();
console.log(short.match(/[A-Z]/g).reduce((acc, i) => acc + i, ""));
