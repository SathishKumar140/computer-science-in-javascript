function Stack () {
  let data = [];
  // always points to the top of the stack
  // initialised to -1 when empty
  let top = -1;

  function push (elem) {
    // increment and add
    data[++top] = elem;
  }

  function pop () {
    // return value at top, and decrement
    if (top > -1) return data[top--];
    throw new Error('Stack empty');
  }

  function peek () {
    return data[top];
  }

  function length () {
    return top + 1;
  }

  function clear () {
    top = -1;
  }

  return {
    push,
    pop,
    peek,
    length,
    clear
  };
}

export default function createStack () {
  return Object.create(Stack());
}
