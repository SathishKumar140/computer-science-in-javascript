import createLinkedList from '../LinkedList';
import expect from 'expect';

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = createLinkedList();
  });

  it('adds fine at the end of linked list', () => {
    linkedList.insert('Carbs');
    linkedList.insert('Kebabs');
    linkedList.insert('Eggs');
    expect(linkedList.show()).toEqual('head -> Carbs -> Kebabs -> Eggs');
  });

  it('adds fine at the mid of linked list', () => {
    linkedList.insert('Carbs');
    linkedList.insert('Kebabs');
    linkedList.insert('Eggs');
    linkedList.insert('Salami', 'Kebabs');
    expect(linkedList.show()).toEqual('head -> Carbs -> Kebabs -> Salami -> Eggs');
  });

  it('adds fine at the end when after element does not exist', () => {
    linkedList.insert('Carbs');
    linkedList.insert('Kebabs');
    linkedList.insert('Eggs');
    linkedList.insert('Salami', 'Potato');
    expect(linkedList.show()).toEqual('head -> Carbs -> Kebabs -> Eggs -> Salami');
  });

  it('finds an element alright', () => {
    linkedList.insert('Carbs');
    linkedList.insert('Kebabs');
    linkedList.insert('Eggs');
    expect(linkedList.find('Kebabs').value).toEqual('Kebabs');
    expect(linkedList.find('Omelette')).toNotExist();
  });
});
