/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

// TODO do it in a immutable way.
const add = (n, arr) => {
  const newArr = [];
  map[n].forEach((i) => {
    arr.forEach((a) => {
      newArr.push(`${a}${i}`);
    });
  });
  return newArr;
};

const letterCombinations = function letterCombinations (digits) {
  if (digits === '') return [];
  const numbers = digits.split('');
  let result = map[numbers[0]];
  numbers.slice(1).forEach((n) => {
    result = add(n, result);
  });
  return result;
};

export default letterCombinations;
