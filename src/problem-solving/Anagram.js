export default function (str1, str2) {
  const keys = {};
  str1.split('').reduce((prev, current) => {
    if (prev[current]) {
      prev[current]++;
    } else {
      prev[current] = 1;
    }
    return prev;
  }, keys);

  str2.split('').reduce((prev, current) => {
    if (prev[current]) {
      if (prev[current] === 1) {
        delete prev[current];
      } else {
        prev[current] += -1;
      }
    } else {
      prev[current] = 1;
    }
    return prev;
  }, keys);

  return !Object.keys(keys).length;
}
