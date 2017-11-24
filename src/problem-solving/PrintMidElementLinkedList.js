import createLinkedList from '../ds/LinkedList';

// http://www.geeksforgeeks.org/write-a-c-function-to-print-the-middle-of-the-linked-list/

// imput array to construct a LinkedList, and then find the middle element
export default function MidElementLinkedList (arr = []) {
  // constructing linked list
  const list = createLinkedList();
  arr.forEach(item => list.insert(item));

  // both pointers start from HEAD
  let slowPointer = list.getHead();
  let fastPointer = list.getHead();

  // go till fastPointer is not NULL and
  // fastPointer.next is also not NULL.
  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer.value;
}
