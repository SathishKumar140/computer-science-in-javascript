import add from '../add';
import expect from 'expect';

describe('Add', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toEqual(5);
  });

  it('adds correctly negative numbers too', () => {
    expect(add(-2, -3)).toEqual(-5);
  });
});
