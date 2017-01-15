function createNode (data) {
  const Node = {
    left: null,
    right: null,
    value: null,
  };
  // trying to be fancy :P
  return Object.create(Node, {
    value: { writable: true, configurable: true, value: data },
  });
}

function BinarySearchTree () {
  // private variables ;)
  let root = null;

  function setLeft (rootNode, node) {
    // if left node is empty,
    // set node and be done with it
    if (!rootNode.left) {
      rootNode.left = node;
      return;
    }
    // left is already assigned, find new place
    if (node.value > rootNode.left.value) return setRight(rootNode.left, node);
    return setLeft(root.left, node);
  }

  function setRight (rootNode, node) {
    if (!rootNode.right) {
      rootNode.right = node;
      return;
    }
    if (node.value > rootNode.right.value) return setRight(rootNode.right, node);
    return setLeft(rootNode.right, node);
  }

  function insert (data) {
    const node = createNode(data);
    if (!root) {
      root = node;
      return;
    }
    const currentNode = root;
    if (node.value < currentNode.value) return setLeft(currentNode, node);
    return setRight(currentNode, node);
  }

  function getMax (rootNode = root) {
    let currentNode = rootNode;
    while (currentNode.right) currentNode = currentNode.right;
    return currentNode;
  }

  function getMin (rootNode = root) {
    let currentNode = rootNode;
    while (currentNode.left) currentNode = currentNode.left;
    return currentNode;
  }

  function find (value) {
    // using an inner function because I want to use
    // recursion, I <3 it!
    function findInTree (rootNode, v = value) {
      if (v === rootNode.value) return true;
      if (v < rootNode.value) return findInTree(rootNode.left, v);
      return findInTree(rootNode.right, v);
    }
    return findInTree(root, value);
  }

  function remove (value) {
    // using an inner function because I want to use
    // recursion, because I couldn't think of anything else :/
    function removeNode (rootNode, v) {
      if (v === rootNode.value) {
        // case: no children, easy peasy
        if (!rootNode.left && !rootNode.right) return null;

        // case: one child
        if (!rootNode.left) return rootNode.right;
        if (!rootNode.right) return rootNode.left;

        // case: two children, trickier
        // choose the smallest element from the
        // right subtree and replace with the parent node
        const tempNode = getMin(rootNode.right);
        rootNode.value = tempNode.value;
        rootNode.right = removeNode(rootNode.right, tempNode.value);
        return rootNode;
      }
      // go right subtree
      if (v > rootNode.value) {
        rootNode.right = removeNode(rootNode.right, v);
        return rootNode;
      }
      // go to left subtree
      rootNode.left = removeNode(rootNode.left, v);
      return rootNode;
    }
    root = removeNode(root, value);
  }

  return {
    insert,
    getMax,
    getMin,
    find,
    remove,
    get () {
      return root;
    },
  };
}

export default function createBinarySearchTree () {
  return Object.create(BinarySearchTree());
}
