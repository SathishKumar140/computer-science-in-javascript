import expect from 'expect';
import LinkedList, { HEAD } from '../../ds/LinkedList';
import DetectCycle from '../DetectLinkedListCycle';
import RemoveCycle from '../RemoveLinkedListCycle';

function createLinkedList (arr = [5, 4, 3, 2, 1]) {
  const list = LinkedList();
  arr.forEach(i => list.insert(i));
  return list;
}

describe('DetectLinkedListCycle', () => {
  it('removes cycle', () => {
    const list = createLinkedList();
    // make a loop
    const secondNode = list.getHead().next.next;
    const lastNode = secondNode.next.next.next;
    lastNode.next = secondNode;
    /*
       1 - 2 - 3
           |   |
           5 - 4
    */
    expect(DetectCycle(RemoveCycle(list))).toBeFalsy();
    expect(list.show()).toBe(`${HEAD} -> 1 -> 2 -> 3 -> 4 -> 5`);
  });

  it('removes cycle again', () => {
    const list = createLinkedList([3, 2, 1]);
    list.getHead().next.next.next.next = list.getHead().next.next;
    expect(DetectCycle(list)).toBeTruthy();
    expect(DetectCycle(RemoveCycle(list))).toBeFalsy();

    expect(list.show()).toBe(`${HEAD} -> 1 -> 2 -> 3`);
  });
});
