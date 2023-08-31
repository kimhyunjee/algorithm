const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let index = 0;

function dfs(graph, node, color, colors) {
  colors[node] = color;

  for (const neighbor of graph[node]) {
    if (colors[neighbor] === color) {
      return false;
    }

    if (colors[neighbor] === 0 && !dfs(graph, neighbor, -color, colors)) {
      return false;
    }
  }

  return true;
}

function solve() {
  const T = parseInt(input[index++]);

  for (let t = 0; t < T; t++) {
    const [V, E] = input[index++].split(' ').map(Number);
    const graph = new Array(V + 1).fill(null).map(() => []);
    const colors = new Array(V + 1).fill(0);

    for (let i = 0; i < E; i++) {
      const [a, b] = input[index++].split(' ').map(Number);
      graph[a].push(b);
      graph[b].push(a);
    }

    let isBipartite = true;
    for (let i = 1; i <= V; i++) {
      if (colors[i] === 0 && !dfs(graph, i, 1, colors)) {
        isBipartite = false;
        break;
      }
    }

    console.log(isBipartite ? 'YES' : 'NO');
  }
}

solve();
