/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// copy the next node's value on to the current node
// point current node's next ot next.next
// done
const deleteNode = function (node) {
  const nextNodeVal = node.next.val;
  node.val = nextNodeVal;
  node.next = node.next.next;
};
