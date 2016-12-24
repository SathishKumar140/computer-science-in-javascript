import expect from 'expect';

import solution from '../3n+1';

describe('3n + 1', () => {
  it('prints correct cycle', () => {
    expect(solution(100, 200)).toEqual('100 200 125');
    expect(solution(201, 210)).toEqual('201 210 89');
    expect(solution(900, 1000)).toEqual('900 1000 174');
    expect(solution(1, 100000)).toEqual('1 100000 351');
  });
});
