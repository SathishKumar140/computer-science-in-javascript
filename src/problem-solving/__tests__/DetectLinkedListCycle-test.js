import expect from 'expect';
import LinkedList from '../../ds/LinkedList';
import DetectCycle from '../DetectLinkedListCycle';

function createLinkedList (arr = [1, 2, 3, 4, 5]) {
  const list = LinkedList();
  arr.forEach(i => list.insert(i));
  return list;
}

describe('DetectLinkedListCycle', () => {
  it('detects cycle', () => {
    const list = createLinkedList();
    // make a loop
    const secondNode = list.getHead().next.next;
    const lastNode = secondNode.next.next.next;
    lastNode.next = secondNode;
    /*
       5 - 4 - 3
           |   |
           1 - 2
    */

    expect(DetectCycle(list)).toBeTruthy();
  });

  it('no cycle', () => {
    const list = createLinkedList();
    expect(DetectCycle(list)).toEqual(false);
  });
});
