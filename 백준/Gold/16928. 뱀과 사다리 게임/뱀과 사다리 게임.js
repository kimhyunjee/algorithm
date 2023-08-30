const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const snakesAndLadders = new Array(101).fill(0);

for (let i = 1; i <= n + m; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  snakesAndLadders[start] = end;
}

const solve = () => {
  const N = 100;
  const visited = new Array(N + 1).fill(false);
  const queue = [{ cell: 1, turns: 0 }];

  while (queue.length > 0) {
    const { cell, turns } = queue.shift();
    visited[cell] = true;

    if (cell === N) {
      console.log(turns);
      return;
    }

    for (let move = 1; move <= 6; move++) {
      const nextCell = cell + move;
      if (nextCell <= N && !visited[nextCell]) {
        const next = snakesAndLadders[nextCell] !== 0 ? snakesAndLadders[nextCell] : nextCell;
        if (!visited[next]) {
          queue.push({ cell: next, turns: turns + 1 });
          visited[next] = true;
        }
      }
    }
  }
};

solve();
