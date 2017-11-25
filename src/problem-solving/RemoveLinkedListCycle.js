import DetectCycle from './DetectLinkedListCycle';

export default function RemoveCycle (list) {
  // first, check if there's a cycle
  const cycleNode = DetectCycle(list);

  if (!cycleNode) return list; // no cycle, return list.

  let slowPointer = list.getHead();
  let fastPointer = cycleNode;

  // start both pointers with the same speed,
  // the point at which both meet is the cyclic node
  while (slowPointer.next !== fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  // at this point of time, both nodes are at cyclic node
  fastPointer.next = null;

  return list;
}
