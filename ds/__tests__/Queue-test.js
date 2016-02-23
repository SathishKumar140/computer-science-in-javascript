import createQueue from '../Queue';
import expect from 'expect';

describe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = createQueue();
  });

  it('enqueues just fine', () => {
    queue.enqueue('Sandwich');
    queue.enqueue('Burger');
    expect(queue.length()).toEqual(2);
  });

  it('dequeues just fine', () => {
    queue.enqueue('Sandwich');
    queue.enqueue('Burger');
    expect(queue.dequeue()).toEqual('Sandwich');
    expect(queue.length()).toEqual(1);
  });

  it('returns the front element just fine', () => {
    queue.enqueue('Sandwich');
    queue.enqueue('Burger');
    expect(queue.front()).toEqual('Sandwich');
  });

  it('returns the back element just fine', () => {
    queue.enqueue('Sandwich');
    queue.enqueue('Burger');
    expect(queue.back()).toEqual('Burger');
  });

  it('checks whether the queue is empty or not', () => {
    expect(queue.isEmpty()).toExist();
    queue.enqueue('Sandwich');
    queue.enqueue('Burger');
    expect(queue.isEmpty()).toNotExist();
  });

  it('throws when tried to query an empty queue', () => {
    expect(() => { queue.dequeue(); }).toThrow(/Queue is empty/);
    expect(() => { queue.front(); }).toThrow(/Queue is empty/);
    expect(() => { queue.back(); }).toThrow(/Queue is empty/);
  });
});
