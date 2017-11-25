// concept is, run two pointers one slow and one fast,
// if both pointers point to the same node anytime,
// there's a cycle

export default function DetectCycle (linkedList) {
  let slowPointer = linkedList.getHead();
  let fastPointer = linkedList.getHead();

  while (1) {
    // move the pointers
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    // did the pointers meet?
    if (slowPointer === fastPointer) return slowPointer;

    // did we reach the end of the linked list,
    // so no cycle!
    if (!fastPointer || !fastPointer.next) return false;
  }
}
