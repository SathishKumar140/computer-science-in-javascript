// https://leetcode.com/problems/binary-tree-right-side-view/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = (root) => {
  let max = 0;

  const traverse = (node, level) => {
    const result = [];

    if (!node) return [];

    if (level > max) {
      max = level;
      result.push(node.val);
    }

    level++;
    return [...result, ...traverse(node.right, level + 1), ...traverse(node.left, level + 1)];
  };

  return traverse(root, 1);
};

export default rightSideView;
