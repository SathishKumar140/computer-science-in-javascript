import expect from 'expect';

import QuickSort from '../QuickSort';

describe('QuickSort', () => {
  it('sorts worst case perfectly', () => {
    const input = [30, 20, 15, 8];
    const output = QuickSort(input);
    expect(output).toEqual([8, 15, 20, 30]);
  });

  it('sorts perfectly', () => {
    const input = [99, 45, 23, 100, 150, 2, 5];
    const output = QuickSort(input);
    expect(output).toEqual([2, 5, 23, 45, 99, 100, 150]);
  });

  it('sorts perfectly with duplicate numbers', () => {
    const input = [22, 1, 99, 45, 23, 33, 100, 22, 150, 2, 5, 33];
    const output = QuickSort(input);
    expect(output).toEqual([1, 2, 5, 22, 22, 23, 33, 33, 45, 99, 100, 150]);
  });
});
