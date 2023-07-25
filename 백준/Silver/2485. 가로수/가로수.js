const [count, ...strInput] =  require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const input = strInput.map(Number);

const getGcd = (x, y) => {
  if (y == 0) return x;
  else return getGcd(y, x % y);
};

const dist = [];
for (let i = 0; i < count - 1; i++) {
  dist.push(input[i + 1] - input[i]);
}

let gcd = input[count - 1];
for (let i = 0; i < count - 2; i++) {
  let tempGcd = getGcd(dist[i + 1], dist[i]);
  if (tempGcd < gcd) gcd = tempGcd;
}


let output = 0;

for (let i = 0; i < count - 1; i++) {
  const tempDis = dist[i];

  if (tempDis !== gcd) {
    output += tempDis / gcd - 1;
  }
}

console.log(output);