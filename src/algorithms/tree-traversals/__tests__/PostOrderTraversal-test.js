import expect from 'expect';

import createBinarySearchTree from '../../../ds/BinarySearchTree';
import PostOrderTraversal from '../PostOrderTraversal';

describe('PostOrderTraversal', () => {
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
    expect(PostOrderTraversal(bst.get())).toEqual(
      [3, 22, 16, 37, 99, 45, 23],
    );
  });
});
