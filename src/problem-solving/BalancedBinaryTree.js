/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const max = (n1, n2) => (n1 > n2 ? n1 : n2);

const getDepth = (node) => {
  if (!node) return 0;
  return 1 + max(getDepth(node.left), getDepth(node.right));
};
const isBalanced = function (root) {
  if (!root) return true;

  const left = getDepth(root.left);
  const right = getDepth(root.right);
  const diff = Math.abs(left - right);

  return diff <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

export default isBalanced;
