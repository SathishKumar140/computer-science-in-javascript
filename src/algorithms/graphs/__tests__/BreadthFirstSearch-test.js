import expect from 'expect';
import BreadthFirstSearch, { createAdjacencyList } from '../BreadthFirstSearch';

describe('BFS', () => {
  it('traverses BFS', () => {
    const graph = createAdjacencyList(4, [[1, 3], [1, 2]]);
    expect(BreadthFirstSearch(graph, 1)).toEqual([1, 3, 2]);
  });
});
