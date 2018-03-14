// graph is an adjacency list
export default function BFS (graph, startNode) {
  const queue = [startNode];
  const visited = { [startNode]: true };
  const path = [];
  while (queue.length) {
    const traversed = queue.shift();
    path.push(traversed);

    graph[traversed].forEach((n) => {
      if (!visited[n]) {
        queue.push(n);
        visited[n] = true;
      }
    });
  }

  return path;
}

export function createAdjacencyList (nodes, edges) {
  const allNodes = Array.from({ length: nodes })
    .map((item, i) => ++i)
    .reduce((acc, i) => Object.assign({}, acc, { [i]: [] }), {});

  return edges.reduce((acc, edge) => {
    const nodeA = edge[0];
    const nodeB = edge[1];
    // set nodes
    acc[nodeA].push(nodeB);
    acc[nodeB].push(nodeA);
    return acc;
  }, allNodes);
}
