const List = function () {
  let data = [];
  let position = 0;

  function clear () {
    data = [];
    position = 0;
  }
  function append (el) {
    data.push(el);
  }
  function find (fn) {
    let foundObject;
    data.some((item, index, array) => {
      if (fn(item)) {
        foundObject = {item, index};
        return true;
      }
    });
    if (foundObject) return foundObject;
  }
  function remove (fn) {
    const item = find(fn);
    if (item) data.splice(item.index, 1);
  }
  function length () {
    return data.length;
  }
  function getItems () {
    return data;
  }
  function front () {
    position = 0;
    return data[position];
  }
  function last () {
    position = data.length - 1;
    return data[position];
  }
  function next () {
    if (position < data.length - 1) return data[++position];
    throw new Error('Tried to access outside of List');
  }
  function prev () {
    if (position > 0) return data[--position];
    throw new Error('Tried to access negative index of List');
  }
  function currentPos () {
    return position;
  }
  function moveTo (pos) {
    if (pos <= data.length - 1 && pos >= 0) position = pos;
  }
  function getItemAt (index) {
    if (index <= data.length - 1 && index >= 0) return data[index];
    throw new Error(index, 'out of bounds.');
  }
  return {
    clear,
    append,
    find,
    remove,
    length,
    getItems,
    front,
    last,
    next,
    prev,
    currentPos,
    moveTo,
    getItemAt
  };
};

export default function createList () {
  return Object.create(List());
}
