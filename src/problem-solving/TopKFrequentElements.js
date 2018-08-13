// https://leetcode.com/problems/top-k-frequent-elements/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent (nums, k) {
  const map = nums.reduce((acc, n) => {
    acc[n] = acc[n] || 0;
    acc[n]++;
    return acc;
  }, {});

  // sort
  return Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .slice(0, k)
    .map(Number);
}

export default topKFrequent;
