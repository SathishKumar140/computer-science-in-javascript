/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function longestCommonPrefix (strs) {
  // using binary search to find this out
  let low = 0;
  let high = strs.reduce((h, current) => (h < current.length ? current.length : h), 0);
  const firstElement = strs[0] || '';

  const prefixExists = (mid) => {
    const desired = firstElement.slice(0, mid);
    if (!desired) return false;
    for (let i = 0; i < strs.length; i++) {
      if (desired !== strs[i].slice(0, mid)) return false;
    }
    return true;
  };
  while (low <= high) {
    const mid = Math.ceil((low + high) / 2);

    if (prefixExists(mid)) low = mid + 1;
    else high = mid - 1;
  }
  return firstElement.slice(0, (low + high) / 2);
};

export default longestCommonPrefix;
