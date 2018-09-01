/**
 * @param {number} n
 * @return {string[]}
 */

// string, openRemaining, closeRemaining
const generate = (str, open, close) => {
  if (open === 0 && close === 0) return [str];
  if (open === 0) return generate(`${str})`, 0, close - 1);
  if (open === close) return generate(`${str}(`, open - 1, close);
  return [...generate(`${str}(`, open - 1, close), ...generate(`${str})`, open, close - 1)];
};
const generateParenthesis = function (n) {
  return generate('', n, n);
};

export default generateParenthesis;
