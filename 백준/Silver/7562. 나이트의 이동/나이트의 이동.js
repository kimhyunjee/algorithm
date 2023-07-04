const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const dir = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
let start, goal, N, visited;

const bfs = () => {
  const queue = [[start[0], start[1], 0]];
  while (queue.length) {
    const [cx, cy, move] = queue.shift();
      
    if (cx == goal[0] && cy == goal[1]) return move;
    for (let i = 0; i < 8; i++) {
      const nx = cx + dir[i][0];
      const ny = cy + dir[i][1];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, move + 1]); 
      }
    }
  }
};

for (let idx = 1; idx < input.length - 1; idx++) {
  N = +input[idx];
  start = input[idx + 1];
  goal = input[idx + 2];
  idx += 2;
  visited = Array.from(Array(N), () => Array(N).fill(false));

  console.log(bfs());
}