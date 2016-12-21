import expect from 'expect';

import InsertionSort from '../InsertionSort';

describe('InsertionSort', () => {
  it('sorts worst case perfectly', () => {
    const input = [30, 20, 15, 8];
    const output = InsertionSort(input);
    expect(output).toEqual([8, 15, 20, 30]);
  });

  it('sorts characters perfectly', () => {
    const input = ['I', 'N', 'S', 'E', 'R', 'T', 'I', 'O', 'N', 'S', 'O', 'R', 'T'];
    const output = InsertionSort(input);
    expect(output).toEqual(['E', 'I', 'I', 'N', 'N', 'O', 'O', 'R', 'R', 'S', 'S', 'T', 'T']);
  });
});
