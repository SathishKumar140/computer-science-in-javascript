import expect from 'expect';

import PrintMidElementLinkedList from '../PrintMidElementLinkedList';

describe('PrintMidElementLinkedList', () => {
  it('prints middle element just fine', () => {
    expect(PrintMidElementLinkedList([1, 2, 3])).toEqual(2);
  });

  it('prints middle element just fine for odd', () => {
    expect(PrintMidElementLinkedList([1, 2, 3, 4, 5, 6, 7])).toEqual(4);
  });

  it('prints middle element just fine for even', () => {
    expect(PrintMidElementLinkedList([1, 2, 3, 4])).toEqual(3);
  });

  it('prints middle element just fine for one element', () => {
    expect(PrintMidElementLinkedList([1])).toEqual(1);
  });

  it('prints middle element just fine for no element', () => {
    expect(PrintMidElementLinkedList([])).toEqual('head');
  });
});
