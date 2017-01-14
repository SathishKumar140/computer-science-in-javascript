export default function PreOrderTraversal (tree) {
  function traverse (t = tree, arr = []) {
    if (!t) return null;
    arr.push(t.value);
    traverse(t.left, arr);
    traverse(t.right, arr);
    return arr;
  }

  return traverse(tree);
}
