const [A, P] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(v => +v);
const arr = [A];
while (true) {
    const curNum = String(arr[arr.length-1]);
    const nextNum = curNum.split("").reduce((acc, v) => acc + Number(v)**P, 0);
    if (arr.includes(nextNum)) {
        console.log(arr.indexOf(nextNum));
        break;
    }
    arr.push(nextNum);
}