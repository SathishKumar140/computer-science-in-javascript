import expect from 'expect';

import createBinarySearchTree from '../BinarySearchTree';

describe('BinarySearchTree', () => {
  let bst;

  beforeEach(() => {
    bst = createBinarySearchTree();
  });

  it('adds 2 nodes just fine', () => {
    bst.insert(8);
    bst.insert(3);
    bst.insert(12);
    const output = bst.get();
    expect(output.value).toBe(8);
    expect(output.left.value).toBe(3);
    expect(output.right.value).toBe(12);
  });

  it('adds multiple nodes just fine', () => {
    bst.insert(8);
    bst.insert(3);
    bst.insert(12);
    bst.insert(1);
    bst.insert(7);
    bst.insert(11);
    bst.insert(100);
    const output = bst.get();
    expect(output.value).toBe(8);
    expect(output.left.value).toBe(3);
    expect(output.right.value).toBe(12);
    expect(output.left.left.value).toBe(1);
    expect(output.left.right.value).toBe(7);
    expect(output.right.left.value).toBe(11);
    expect(output.right.right.value).toBe(100);
  });
});
