import expect from 'expect';

import createBinarySearchTree from '../BinarySearchTree';
import InOrder from '../../algorithms/tree-traversals/InOrderTraversal';

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

  it('returns the max value', () => {
    bst.insert(8);
    bst.insert(3);
    bst.insert(12);
    bst.insert(1);
    bst.insert(7);
    bst.insert(11);
    bst.insert(100);
    const output = bst.getMax();
    expect(output.value).toBe(100);
  });

  it('returns the min value', () => {
    bst.insert(8);
    bst.insert(3);
    bst.insert(12);
    bst.insert(1);
    bst.insert(7);
    bst.insert(11);
    bst.insert(100);
    const output = bst.getMin();
    expect(output.value).toBe(1);
  });

  it('finds a value', () => {
    bst.insert(8);
    bst.insert(3);
    bst.insert(12);
    bst.insert(1);
    bst.insert(7);
    bst.insert(11);
    bst.insert(100);
    const output = bst.find(1);
    expect(output).toBe(true);
  });

  it('deletes a node just fine', () => {
    bst.insert(50);
    bst.insert(30);
    bst.insert(70);
    bst.insert(20);
    bst.insert(40);
    bst.insert(60);
    bst.insert(80);
    expect(InOrder(bst.get())).toEqual(
      [20, 30, 40, 50, 60, 70, 80],
    );
    bst.remove(20);
    expect(InOrder(bst.get())).toEqual(
      [30, 40, 50, 60, 70, 80],
    );
    bst.remove(30);
    expect(InOrder(bst.get())).toEqual(
      [40, 50, 60, 70, 80],
    );
    bst.remove(70);
    expect(InOrder(bst.get())).toEqual(
      [40, 50, 60, 80],
    );
  });
});
