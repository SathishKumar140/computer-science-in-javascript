/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = (k, n) => {
  const generate = (set, superset, targetSum) => {
    if (targetSum === 0 && set.length === k) return [set];

    return superset.reduce((result, choice, index) => {
      if (targetSum >= choice && set.length <= k) {
        return [
          ...result,
          ...generate([...set, choice], superset.slice(index + 1), targetSum - choice),
        ];
      }

      return result;
    }, []);
  };
  return generate([], [1, 2, 3, 4, 5, 6, 7, 8, 9], n);
};

export default combinationSum3;
