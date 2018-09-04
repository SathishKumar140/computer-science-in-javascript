/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function gen (superset, arr) {
  // base case
  if (superset.length === 0) return [arr];

  // make the choices
  // choice is to choose a number from the set
  // e.g. [1,2,3]
  // so below we choose 1 first, then 2 first and then 3
  return superset.reduce(
    (acc, i) => [...acc, ...gen(superset.filter(n => n !== i), [...arr, i])],
    [],
  );
}
const permute = function (nums) {
  return gen(nums, []);
};

export default permute;
