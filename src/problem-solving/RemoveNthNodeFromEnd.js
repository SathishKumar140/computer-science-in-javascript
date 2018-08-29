/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function removeNthFromEnd (head, n) {
  // add a dummy header to cover corner cases, when there's just one element
  const realHead = { val: '', next: head };

  let pointer1 = realHead;
  let pointer2 = realHead;
  // run pointer1 first, and wait till it makes n hops
  // then start pointer2 from head
  // when pointer1 would reach the end, pointer2 would point to nth node from end
  // remove it

  let count = 0;
  while (pointer1.next) {
    pointer1 = pointer1.next;
    count++;

    if (count > n) {
      pointer2 = pointer2.next;
    }
  }

  // pointer2 is in correct position now
  pointer2.next = pointer2.next.next;
  return realHead.next;
};

export default removeNthFromEnd;
