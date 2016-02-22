import createList from '../List';
import expect from 'expect';

describe('List', () => {
  var list;
  beforeEach(() => {
    list = createList();
  });

  it('returns an empty array at first', () => {
    expect(list.getItems()).toEqual([]);
  });

  it('adds an element to a list', () => {
    list.append('Bond, James Bond');
    expect(list.getItems()).toEqual(['Bond, James Bond']);
  });

  it('clears elements', () => {
    list.append('Bond, James Bond');
    list.clear();
    expect(list.getItems()).toEqual([]);
  });

  it('finds an element alright', () => {
    const item = 'Don!';
    list.append(item);
    const expected = list.find((i) => { return i === item; });
    expect(item).toEqual(expected.item);
  });

  it('removes an element alright', () => {
    const item = 'Don!';
    list.append(item);
    list.remove((i) => { return i === item; });
    expect(list.getItems()).toEqual([]);
  });

  it('not removes a non existent item', () => {
    const item = 'Don!';
    list.append(item);
    list.remove((i) => { return i === 'Teddy'; });
    expect(list.getItems()).toEqual([item]);
  });

  it('returns the length just fine', () => {
    list.append('Chicken');
    list.append('Meat');
    list.append('Fish');
    expect(list.length()).toEqual(3);
  });

  it('always returns the front/last element', () => {
    list.append('Chicken');
    list.append('Meat');
    list.append('Fish');
    expect(list.front()).toEqual('Chicken');
    expect(list.last()).toEqual('Fish');
  });

  it('returns correct position', () => {
    list.append('Chicken');
    list.append('Meat');
    list.append('Fish');
    list.next(); // Meat
    expect(list.next()).toEqual('Fish');
    expect(list.prev()).toEqual('Meat');
    expect(list.currentPos()).toEqual(1);
  });

  it('throws error if index goes out of bound', () => {
    list.append('Yo!');
    expect(() => list.next()).toThrow(/Tried to access outside of List/);
    expect(() => list.prev()).toThrow(/Tried to access negative index of List/);
  });

  it('moves the position pointer alright', () => {
    list.append('Chicken');
    list.append('Meat');
    list.append('Fish');
    list.moveTo(2);
    expect(list.currentPos()).toEqual(2);
    list.moveTo(-2);
    expect(list.currentPos()).toNotEqual(-2);
    list.moveTo(3);
    expect(list.currentPos()).toNotEqual(3);
  });

  it('returns the correct item when accessed by index', () => {
    list.append('Chicken');
    list.append('Meat');
    list.append('Fish');
    expect(list.getItemAt(0)).toEqual('Chicken');
    expect(list.getItemAt(2)).toEqual('Fish');
    expect(() => list.getItemAt(3)).toThrow();
    expect(() => list.getItemAt(0)).toNotThrow();
    expect(() => list.getItemAt(-1)).toThrow();
  });
});
