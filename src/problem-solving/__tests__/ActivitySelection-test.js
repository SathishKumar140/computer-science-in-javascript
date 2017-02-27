import expect from 'expect';

import ActivitySelection from '../ActivitySelection';

describe('ActivitySelection', () => {
  it('it finds the doable activities just fine', () => {
    expect(
      ActivitySelection([10, 12, 20], [20, 25, 30]),
    ).toEqual([0, 2]);
  });

  it('it finds the doable activities for a larger set just fine', () => {
    expect(
      ActivitySelection([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9]),
    ).toEqual([0, 1, 3, 4]);
  });

  it('it finds the doable activities for an unsorted set just fine', () => {
    expect(
      ActivitySelection([5, 1, 3, 0, 5, 8], [9, 2, 4, 6, 7, 9]),
    ).toEqual([1, 2, 4, 5]);
  });
});
