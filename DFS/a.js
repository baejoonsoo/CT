const dfs = (graph, v, visited) => {
  visited[v] = true;
  console.log(v);

  graph[v].forEach((node) => {
    if (!visited[node]) {
      dfs(graph, node, visited);
    }
  });
};

const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

let visited = Array(9).fill(false);
console.log();
// dfs(graph, 1, visited);

for (let node in graph) {
  console.log(node);
}
