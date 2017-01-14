export default function PreOrderTraversal (tree) {
  function traverse (t = tree, arr = []) {
    if (!t) return null;
    traverse(t.left, arr);
    traverse(t.right, arr);
    arr.push(t.value);
    return arr;
  }

  return traverse(tree);
}
