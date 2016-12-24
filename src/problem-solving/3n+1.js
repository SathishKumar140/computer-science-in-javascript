import Memoize from '../patterns/Memoize';

// store is an array, which will have all the inputs
function algorithm (n, store = []) {
  store.push(n);
  if (n === 1) return store;
  if (n % 2 === 0) {
    n >>= 1;
  } else {
    n = 3 * n + 1;
  }
  return algorithm(n, store);
}

export default function solution (a, b) {
  let maxCycleLength = 0;
  const memoizedAlgorithm = Memoize(algorithm);
  for (let i = a; i <= b; i++) {
    const maxLength = memoizedAlgorithm(i, []) || [];
    if (maxCycleLength < maxLength.length) maxCycleLength = maxLength.length;
  }
  return `${a} ${b} ${maxCycleLength}`;
}
