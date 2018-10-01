const generate = (set = [], superset = [], target) => {
  const sum = set.reduce((a, i) => a + i, 0);

  // base case
  if (sum === target) return [set];

  // for all choices
  return superset.reduce((result, item, index) => {
    // since we have sorted the array, all duplicate elements
    // will come side-by-side, w'll remove if the element is already processed
    if (superset[index] === superset[index - 1]) return result;

    // go down the path only if it's feasible
    // if the sum is greater, leave, backtrack
    if (sum + item <= target) {
      return [...result, ...generate([...set, item], superset.slice(index + 1), target)];
    }
    return result;
  }, []);
};

// sort the array
const combinationSum2 = (candidates, target) => generate([], candidates.sort(), target);

export default combinationSum2;
