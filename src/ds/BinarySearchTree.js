function createNode (data) {
  const Node = {
    left: null,
    right: null,
    value: null,
  };
  // trying to be fancy :P
  return Object.create(Node, {
    value: { writable: false, configurable: true, value: data },
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
    if (node.value > rootNode.left.value) {
      setRight(rootNode.left, node);
      return;
    }
    setLeft(root.left, node);
  }

  function setRight (rootNode, node) {
    if (!rootNode.right) {
      rootNode.right = node;
      return;
    }
    if (node.value > rootNode.right.value) {
      setRight(rootNode.right, node);
      return;
    }
    setLeft(rootNode.right, node);
  }

  function insert (data) {
    const node = createNode(data);
    if (!root) {
      root = node;
      return;
    }
    const currentNode = root;
    if (node.value < currentNode.value) {
      setLeft(currentNode, node);
      return;
    }
    setRight(currentNode, node);
  }

  return {
    insert,
    get () {
      return root;
    },
  };
}

export default function createBinarySearchTree () {
  return Object.create(BinarySearchTree());
}
