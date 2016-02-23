import createStack from '../Stack';
import expect from 'expect';

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = createStack();
  });

  it('returns the length on an empty stack alright', () => {
    expect(stack.length()).toEqual(0);
  });

  it('adds correctly to stack', () => {
    stack.push('Batman');
    stack.push('Deadpool');
    stack.push('Robin');
    expect(stack.length()).toEqual(3);
  });

  it('pops correctly from stack', () => {
    stack.push('Batman');
    stack.push('Deadpool');
    stack.push('Robin');
    expect(stack.pop()).toEqual('Robin');
    expect(stack.pop()).toEqual('Deadpool');
    expect(stack.pop()).toEqual('Batman');
  });

  it('peeks correctly without changing top pointer', () => {
    stack.push('Batman');
    stack.push('Deadpool');
    expect(stack.peek()).toEqual('Deadpool');
    expect(stack.peek()).toEqual('Deadpool');
  });

  it('clears correctly', () => {
    stack.push('Batman');
    stack.push('Deadpool');
    expect(stack.length()).toEqual(2);
    stack.clear();
    expect(stack.length()).toEqual(0);
    expect(stack.peek()).toNotExist();
  });

  it('throws when reading empty stack', () => {
    stack.push('Deadpool');
    expect(stack.pop()).toEqual('Deadpool');
    expect(() => { stack.pop(); }).toThrow('Stack empty');
  });
});
