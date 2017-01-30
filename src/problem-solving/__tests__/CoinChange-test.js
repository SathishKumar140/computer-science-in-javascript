import expect from 'expect';

import CoinChange from '../CoinChange';

describe('CoinChange', () => {
  it('finds the solution', () => {
    expect(CoinChange([1, 2, 3], 3, 4)).toEqual(4);
  });
});
