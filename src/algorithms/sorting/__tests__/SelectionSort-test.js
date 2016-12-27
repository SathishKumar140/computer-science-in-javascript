import expect from 'expect';

import SelectionSort from '../SelectionSort';

describe('SelectionSort', () => {
  it('sorts worst case perfectly', () => {
    const input = [30, 20, 15, 8];
    const output = SelectionSort(input);
    expect(output).toEqual([8, 15, 20, 30]);
  });

  it('sorts characters perfectly', () => {
    const input = ['S', 'E', 'L', 'E', 'C', 'T', 'I', 'O', 'N', 'S', 'O', 'R', 'T'];
    const output = SelectionSort(input);
    expect(output).toEqual(['C', 'E', 'E', 'I', 'L', 'N', 'O', 'O', 'R', 'S', 'S', 'T', 'T']);
  });

  it('sorts perfectly', () => {
    const input = [99, 45, 23, 100, 150, 2, 5];
    const output = SelectionSort(input);
    expect(output).toEqual([2, 5, 23, 45, 99, 100, 150]);
  });
});
