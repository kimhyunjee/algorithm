const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const ds = [[-1, 0], [1, 0], [0, 1], [0, -1]];
const [N, M] = input.shift().split(' ').map(Number);
const visit = [...Array(N)].map(e => Array(M).fill(0));
const graph = [];
for(let i = 0; i < N ; i++){
  graph.push([...input[i].replace(/\r/g,'').split('').map(Number)]);
}

const queue = [[0, 0]];
visit[0][0] = 1;
while(queue.length){
  const [x, y] = queue.shift();
  if(!graph[x][y]) continue;
  graph[x][y] = 0; 
  for(let i = 0; i < 4 ; i++){
    const xPos = x + ds[i][0];
    const yPos = y + ds[i][1];

    if(xPos < 0 || yPos < 0 || xPos >= N || yPos >= M) continue;
    if(graph[xPos][yPos]){
      queue.push([xPos, yPos]);
      visit[xPos][yPos] = visit[x][y] + 1;
    }
  }
}

console.log(visit[N-1][M-1]);