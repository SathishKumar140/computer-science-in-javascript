import expect from 'expect';

import SpiralTraversal from '../SpiralTraversal';

describe('SpiralTraversal', () => {
  const sample3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const sample4 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];

  it('traverses a 3*3 in a spiral manner alright', () => {
    expect(SpiralTraversal(sample3)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it('traverses a 4*4 in a spiral manner alright', () => {
    expect(SpiralTraversal(sample4)).toEqual(
      [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10],
    );
  });
});
