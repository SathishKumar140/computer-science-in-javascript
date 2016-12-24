import expect from 'expect';

import Memoize from '../Memoize';

describe('Memoize', () => {
  let logs, func;
  beforeEach(() => {
    logs = [];
    func = (input) => {
      // put argument into logs variable every time
      // this function executes
      logs.push(input);
      return 2 * input;
    };
  });
  it('works', () => {
    const memoizedFunc = Memoize(func);
    memoizedFunc(2);
    expect(logs).toEqual([2]);
    memoizedFunc(2);
    expect(logs).toEqual([2]);
  });
});
