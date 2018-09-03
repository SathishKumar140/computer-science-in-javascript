function gen (numArr, sets) {
  // base case
  if (numArr.length === 0) return [sets];
  // for all choices
  const first = numArr[0];
  return [...gen(numArr.slice(1), [...sets, first]), ...gen(numArr.slice(1), sets)];
}

function subsets (numArr) {
  return gen(numArr, []);
}

export default subsets;
