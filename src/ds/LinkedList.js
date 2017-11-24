export const HEAD = '__@[[[HEAD]]]@__';

function createNode (elem, isHead) {
  return Object.defineProperties({}, {
    value: {
      value: isHead ? HEAD : elem,
      writable: !isHead,
    },
    next: {
      value: null,
      writable: true,
    },
  });
}

export default function LinkedList () {
  const head = createNode(null, true);

  function find (el) {
    let currentNode = head;
    if (el) { // find el
      while (currentNode && currentNode.value !== el) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
    // no el was given, return head
    return currentNode;
  }

  function insert (newEl, afterEl) {
    const currentNode = find(afterEl) || find();
    const newNode = createNode(newEl);
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

  function remove (elem) {
    function findPrevious (element) {
      let current = head;
      while (current && current.next && current.next.value !== element) {
        current = current.next;
      }

      // if it reaches here, then current.next is the element
      // and current is the node.
      if (current && current.next && current.next.value === element) return current;
    }

    if (elem === HEAD) throw new Error('Can\'t delete HEAD');
    const prevNode = findPrevious(elem);
    const nodeToBeDeleted = find(elem);

    if (prevNode) {
      prevNode.next = nodeToBeDeleted.next;
    }
  }

  return Object.defineProperties(head, {
    find: { value: find },
    insert: { value: insert },
    show: { value: show },
    remove: { value: remove },
    getHead: { value: () => head },
  });
}

