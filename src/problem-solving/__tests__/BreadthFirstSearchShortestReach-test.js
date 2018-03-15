import expect from 'expect';

import BFS from '../BreadthFirstSearchShortestReach';
import { createAdjacencyList } from '../../algorithms/graphs/BreadthFirstSearch';

describe('finds shortest path', () => {
  it('finds shortest path - 1', () => {
    const graph = createAdjacencyList(4, [[1, 2], [1, 3]]);
    expect(BFS(graph, 1, 6)).toEqual([6, 6, -1]);
  });

  it('finds shortest path - 2', () => {
    const graph = createAdjacencyList(3, [[2, 3]]);
    expect(BFS(graph, 2, 6)).toEqual([-1, 6]);
  });
});
