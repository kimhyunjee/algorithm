const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M, B] = input[0].split(" ").map(v => +v);
input.shift();
const land = input.join(" ").split(" ");
const heightArr = new Array(257).fill(0);
land.forEach(v => heightArr[v]++);

const answer = function (B, heightArr) {
    let addition, removal;
    let [height, curTime, minTime] = [0, 0, Number.MAX_VALUE];
    for (let i=256; i >= 0; i--) {
        addition = 0;
        removal = 0;
        heightArr.forEach((v, idx) => {
            if (i < idx) removal += (idx - i)*v;
            else addition += (i - idx)*v;
        });
        if (B < addition-removal) continue;
        curTime = addition + removal*2;
        if (minTime !== Number.MAX_VALUE && minTime < curTime) break;
        if (minTime > curTime) {
            minTime = curTime;
            height = i;
        }
    }
    if (minTime === Number.MAX_VALUE) minTime = 0;
    return `${minTime} ${height}`;
};

console.log(answer(B, heightArr));
/*heightArr에 높이가 0부터 256까지인 땅의 개수를 저장한다.
그 다음, 모든 땅의 높이를 256부터 1씩 낮춰가며 설정하면서
해당 높이로 땅 고르기 작업을 할 때의 시간을 minTime에 저장한다.
최종적으로 가장 작은 minTime과 그 때의 땅의 높이를 출력한다.

 

중간에 있는 break문의 의미
높이를 256부터 1씩 낮춰가면
블록을 쌓는 작업(addition)의 횟수는 감소하고, 블록을 제거하는 작업(removal)의 횟수는 증가한다.
블록을 제거하는 작업(2초)이 쌓는 작업(1초)에 비해 시간이 더 많이 소요되므로,
높이를 낮춰나가다가 특정 높이에서부터는 높이를 낮출수록 반드시 작업 시간이 증가하게 되어 있다.
따라서, 불필요한 반복을 줄이기 위해 최초 1회(높이가 256)를 제외하고
작업 시간이 이전 시간보다 증가한 경우 반복문을 탈출한다.*/