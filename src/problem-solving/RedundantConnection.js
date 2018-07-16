// https://leetcode.com/problems/redundant-connection/description/
/**
 * @param {number[][]} edges
 * @return {number[]}
 */

const getNodeCountFromEdges = (edges) => {
  const nodes = edges.reduce((acc, e) => {
    acc[e[0]] = true;
    acc[e[1]] = true;
    return acc;
  }, {});
  return Object.keys(nodes).length;
};

const union = (count) => {
  // map the new array with indexes as node names
  const nodes = Array.from({ length: count }).map((_, i) => i);
  // initialize the size with 1, as each node is the parent of itself - assumption
  const size = Array.from({ length: count }).map(() => 1);

  const find = (n) => {
    while (n !== nodes[n]) {
      // path compression, point to grand father
      nodes[n] = nodes[nodes[n]];
      n = nodes[n];
    }
    return n;
  };

  return ([a, b]) => {
    const rootA = find(a);
    const rootB = find(b);

    // already connected, bail!
    if (rootA === rootB) return -1;

    // check the heavier tree
    if (size[rootA] > size[rootB]) {
      nodes[rootB] = rootA;
      size[rootA] += size[rootB];
    } else {
      nodes[rootA] = rootB;
      size[rootB] += size[rootA];
    }
  };
};

export default function findRedundantConnection (edges) {
  const count = getNodeCountFromEdges(edges);
  const merge = union(count);
  for (let i = 0; i < edges.length; i++) {
    const currentEdge = edges[i];
    const result = merge(currentEdge);

    if (result === -1) return currentEdge;
  }
}
