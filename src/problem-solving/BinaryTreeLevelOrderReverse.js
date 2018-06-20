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

export default function levelOrderBottom (root) {
  const nodes = {};
  const save = (delta) => {
    if (nodes[delta.level]) {
      nodes[delta.level].push(delta.val);
      return;
    }
    nodes[delta.level] = [delta.val];
  };

  const traverse = (node, level) => {
    if (!node) return;

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
    save({ level, val: node.val });
  };

  traverse(root, 0);
  return Object.keys(nodes).reduce((acc, key) => [nodes[key], ...acc], []);
}
