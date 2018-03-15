// https://www.hackerrank.com/challenges/bfsshortreach/problem
const search = (graph, node, edgeWeight) => {
  const queue = [node];
  const distances = Object.keys(graph).reduce((acc, n) => {
    acc[n] = n === node ? 0 : -1;
    return acc;
  }, {});
  while (queue.length) {
    const traversed = queue.shift();
    graph[traversed].forEach((n) => {
      if (distances[n] < 0) {
        distances[n] = distances[traversed] + edgeWeight;
        queue.push(n);
      }
    });
  }
  return distances;
};

export default function bfs (graph, startNode, edgeWeight) {
  const distances = search(graph, `${startNode}`, edgeWeight);
  return Object.keys(distances)
    .filter(node => node !== `${startNode}`)
    .map(node => distances[node]);
}
