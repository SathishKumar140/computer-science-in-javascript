/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const generate = (set = [], superset = [], target) => {
  const sum = set.reduce((a, i) => a + i, 0);

  // base case
  if (sum === target) return [set];

  // for all choices
  return superset.reduce((result, item, index) => {
    // go down the path only if it's feasible
    // if the sum is greater, leave, backtrack
    if (sum + item <= target) {
      return [...result, ...generate([...set, item], superset.slice(index), target)];
    }
    return result;
  }, []);
};

const combinationSum = (candidates, target) => generate([], candidates, target);

export default combinationSum;
