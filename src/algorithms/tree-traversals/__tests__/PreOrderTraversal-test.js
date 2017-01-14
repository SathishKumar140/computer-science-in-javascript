import expect from 'expect';

import createBinarySearchTree from '../../../ds/BinarySearchTree';
import PreOrderTraversal from '../PreOrderTraversal';

describe('PreOrderTraversal', () => {
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
    expect(PreOrderTraversal(bst.get())).toEqual(
      [23, 16, 3, 22, 45, 37, 99],
    );
  });
});
