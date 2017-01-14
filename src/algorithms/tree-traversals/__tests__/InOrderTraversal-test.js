import expect from 'expect';

import createBinarySearchTree from '../../../ds/BinarySearchTree';
import InOrderTraversal from '../InOrderTraversal';

describe('InOrderTraversal', () => {
  let bst;

  beforeEach(() => {
    bst = createBinarySearchTree();
  });

  it('traverses just fine', () => {
    bst.insert(23);
    bst.insert(45);
    bst.insert(16);
    bst.insert(37);
    bst.insert(3);
    bst.insert(99);
    bst.insert(22);
    expect(InOrderTraversal(bst.get())).toEqual(
      [3, 16, 22, 23, 37, 45, 99],
    );
  });

  it('traverses again just fine', () => {
    bst.insert(1);
    bst.insert(2);
    bst.insert(8);
    bst.insert(13);
    bst.insert(34);
    bst.insert(99);
    bst.insert(22);
    bst.insert(7);
    expect(InOrderTraversal(bst.get())).toEqual(
      [1, 2, 7, 8, 13, 22, 34, 99],
    );
  });
});
