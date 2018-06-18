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

function min (num1, num2) {
  return num1 > num2 ? num2 : num1;
}

export default function minDepth (root) {
  if (!root) return 0;

  if (!root.left && !root.right) return 1;

  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;

  return min(minDepth(root.left) + 1, minDepth(root.right) + 1);
}
