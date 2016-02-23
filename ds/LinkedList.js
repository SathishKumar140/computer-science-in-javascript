function createNode (elem) {
  const Node = {
    value: null,
    next: null
  };
  return Object.create(Node, {
    value: {writable: true, configurable: true, value: elem}
  });
}

function LinkedList () {
  let head = createNode('head');

  function find (el) {
    let currentNode = head;
    if (el) { // find el
      while (currentNode && currentNode.value !== el) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
    // no el was given, find the end of linked list
    while (currentNode) {
      if (!currentNode.next) return currentNode;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  function insert (newEl, afterEl) {
    let currentNode = find(afterEl) || find();
    let newNode = createNode(newEl);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  function show () {
    let toString = '';
    let current = head;
    while (current) {
      if (toString) toString += ' -> ';
      toString += current.value;
      current = current.next;
    }
    return toString;
  }

  return {
    find,
    insert,
    show
  };
}

export default function createLinkedList () {
  return Object.create(LinkedList());
}
