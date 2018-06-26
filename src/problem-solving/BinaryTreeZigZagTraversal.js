/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
export default function zigzagLevelOrder (root) {
  const nodes = {};
  const save = (level, val) => {
    nodes[level] = nodes[level] || [];
    nodes[level].push(val);
  };

  const traverse = (node, level) => {
    if (!node) return;
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
    save(level, node.val);
  };

  traverse(root, 1);

  return Object.keys(nodes).map(
    (k, index) =>
      // reverse if even
      index % 2 === 0 ? nodes[k] : nodes[k].reverse(),
  );
}
