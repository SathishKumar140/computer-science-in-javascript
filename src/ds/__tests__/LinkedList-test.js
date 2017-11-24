import expect from 'expect';

import LinkedList, { HEAD } from '../LinkedList';

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = LinkedList();
  });

  it('adds fine at the start of linked list', () => {
    linkedList.insert('Carbs');
    linkedList.insert('Kebabs');
    linkedList.insert('Eggs');
    expect(linkedList.show()).toEqual(`${HEAD} -> Eggs -> Kebabs -> Carbs`);
  });

  it('adds fine at the mid of linked list', () => {
    linkedList.insert('Carbs');
    linkedList.insert('Kebabs');
    linkedList.insert('Eggs');
    linkedList.insert('Salami', 'Kebabs');
    expect(linkedList.show()).toEqual(`${HEAD} -> Eggs -> Kebabs -> Salami -> Carbs`);
  });

  it('adds fine at the start when after element does not exist', () => {
    linkedList.insert('Carbs');
    linkedList.insert('Kebabs');
    linkedList.insert('Eggs');
    linkedList.insert('Salami', 'Potato');
    expect(linkedList.show()).toEqual(`${HEAD} -> Salami -> Eggs -> Kebabs -> Carbs`);
  });

  it('finds an element alright', () => {
    linkedList.insert('Carbs');
    linkedList.insert('Kebabs');
    linkedList.insert('Eggs');
    expect(linkedList.find('Kebabs').value).toEqual('Kebabs');
    expect(linkedList.find('Omelette')).toNotExist();
  });

  it('finds an element alright', () => {
    linkedList.insert('Carbs');
    linkedList.insert('Kebabs');
    linkedList.insert('Eggs');
    linkedList.remove('Pasta');
    expect(linkedList.show()).toEqual(`${HEAD} -> Eggs -> Kebabs -> Carbs`);
    linkedList.remove('Eggs');
    expect(linkedList.show()).toEqual(`${HEAD} -> Kebabs -> Carbs`);
    linkedList.remove('Kebabs');
    expect(linkedList.show()).toEqual(`${HEAD} -> Carbs`);
    linkedList.insert('Kebabs');
    linkedList.remove('Carbs');
    expect(linkedList.show()).toEqual(`${HEAD} -> Kebabs`);
  });
});
