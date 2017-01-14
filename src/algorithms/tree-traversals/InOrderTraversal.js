export default function InOrderTraversal (tree) {
  function traverse (t = tree, arr = []) {
    if (!t) return null;
    traverse(t.left, arr);
    arr.push(t.value);
    traverse(t.right, arr);
    return arr;
  }

  return traverse(tree);
}
