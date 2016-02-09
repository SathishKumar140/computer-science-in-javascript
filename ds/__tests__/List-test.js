import List from '../List';
import expect from 'expect';
describe('List', () => {
  beforeEach(() => {
    List.clear();
  });

  it('returns an empty array at first', () => {
    expect(List.getItems()).toEqual([]);
  });

  it('adds an element to a list', () => {
    List.append('Bond, James Bond');
    expect(List.getItems()).toEqual(['Bond, James Bond']);
  });

  it('clears elements', () => {
    List.append('Bond, James Bond');
    List.clear();
    expect(List.getItems()).toEqual([]);
  });

  it('finds an element alright', () => {
    const item = 'Don!';
    List.append(item);
    const expected = List.find((i) => { return i === item; });
    expect(item).toEqual(expected.item);
  });

  it('removes an element alright', () => {
    const item = 'Don!';
    List.append(item);
    List.remove((i) => { return i === item; });
    expect(List.getItems()).toEqual([]);
  });

  it('not removes a non existent item', () => {
    const item = 'Don!';
    List.append(item);
    List.remove((i) => { return i === 'Teddy'; });
    expect(List.getItems()).toEqual([item]);
  });

  it('returns the length just fine', () => {
    List.append('Chicken');
    List.append('Meat');
    List.append('Fish');
    expect(List.length()).toEqual(3);
  });

  it('always returns the front/last element', () => {
    List.append('Chicken');
    List.append('Meat');
    List.append('Fish');
    expect(List.front()).toEqual('Chicken');
    expect(List.last()).toEqual('Fish');
  });

  it('returns correct position', () => {
    List.append('Chicken');
    List.append('Meat');
    List.append('Fish');
    List.next(); // Meat
    expect(List.next()).toEqual('Fish');
    expect(List.prev()).toEqual('Meat');
    expect(List.currentPos()).toEqual(1);
  });

  it('throws error if index goes out of bound', () => {
    List.append('Yo!');
    expect(() => List.next()).toThrow(/Tried to access outside of List/);
    expect(() => List.prev()).toThrow(/Tried to access negative index of List/);
  });

  it('moves the position pointer alright', () => {
    List.append('Chicken');
    List.append('Meat');
    List.append('Fish');
    List.moveTo(2);
    expect(List.currentPos()).toEqual(2);
    List.moveTo(-2);
    expect(List.currentPos()).toNotEqual(-2);
    List.moveTo(3);
    expect(List.currentPos()).toNotEqual(3);
  });

  it('returns the correct item when accessed by index', () => {
    List.append('Chicken');
    List.append('Meat');
    List.append('Fish');
    expect(List.getItemAt(0)).toEqual('Chicken');
    expect(List.getItemAt(2)).toEqual('Fish');
    expect(() => List.getItemAt(3)).toThrow();
    expect(() => List.getItemAt(0)).toNotThrow();
    expect(() => List.getItemAt(-1)).toThrow();
  });
});
