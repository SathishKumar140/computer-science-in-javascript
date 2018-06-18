/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function max (n1, n2) {
  return n1 > n2 ? n1 : n2;
}

const maxDepth = function (root) {
  if (!root) return 0;

  if (!root.left && !root.right) return 1;

  if (!root.left) return maxDepth(root.right) + 1;
  if (!root.right) return maxDepth(root.left) + 1;

  return max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};

export default maxDepth;
