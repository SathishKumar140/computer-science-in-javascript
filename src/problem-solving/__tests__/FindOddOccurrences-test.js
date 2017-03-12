import expect from 'expect';

import FindOddOccurrences from '../FindOddOccurrences';

describe('FindOddOccurrences', () => {
  it('finds the solution', () => {
    expect(FindOddOccurrences([12, 23, 34, 12, 12, 23, 12])).toEqual(34);
  });
});
