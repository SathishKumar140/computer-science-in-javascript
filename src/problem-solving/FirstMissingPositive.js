/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = (nums) => {
  const sorted = nums.slice().sort((a, b) => a - b);
  const filtered = sorted.filter(n => n > 0);

  const totalNumbers = filtered.length;
  let ans = 1;
  let index = 0;
  while (index < totalNumbers) {
    if (filtered[index] === ans) {
      ans++;
    } else {
      return ans;
    }
    index++;
    while (filtered[index] === filtered[index - 1]) index++;
  }

  return ans;
};

export default firstMissingPositive;
