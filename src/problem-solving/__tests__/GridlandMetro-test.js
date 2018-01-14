import expect from 'expect';

import GridlandMetro from '../GridlandMetro';

describe('GridlandMetro', () => {
  it('test case 1', () => {
    expect(GridlandMetro(2, 9, 3, [[2, 1, 5], [2, 2, 4], [2, 8, 8]])).toEqual(12);
  });

  it('test case 1', () => {
    expect(GridlandMetro(1, 5, 3, [[1, 1, 2], [1, 2, 4], [1, 3, 5]])).toEqual(0);
  });
});
