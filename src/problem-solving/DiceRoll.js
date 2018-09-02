// backtracking

// this uses a lot of memory, as it creates
// a new array every time, and it gets called a lot of times

export default function roll (n, choice = []) {
  if (n === 0) return [choice];
  return [1, 2, 3, 4, 5, 6].reduce((acc, i) => [...acc, ...roll(n - 1, [...choice, i])], []);
}
