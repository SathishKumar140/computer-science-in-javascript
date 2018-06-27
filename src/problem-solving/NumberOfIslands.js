/**
 * @param {character[][]} grid
 * @return {number}
 */

function floodFill (arr, [x, y], currentVal, desiredVal) {
  const xmax = arr.length;
  const ymax = arr[0] && arr[0].length;
  if (x < 0 || y < 0) return arr;
  if (x >= xmax || y >= ymax) return arr;
  if (arr[x][y] !== currentVal) return arr;
  arr[x][y] = desiredVal;
  floodFill(arr, [x, y + 1], currentVal, desiredVal);
  floodFill(arr, [x, y - 1], currentVal, desiredVal);
  floodFill(arr, [x + 1, y], currentVal, desiredVal);
  floodFill(arr, [x - 1, y], currentVal, desiredVal);
}

/*
 * algorithm
 * traverse the entire grid once,
 * for each element check if it's `land - 1`,
 * run `floodFill` algorithm so that all connected lands are changed to some other character say `@`
 * this way, in the next loop iteration the value will not be land - 1,
 * increment the counter variable as we've successfully found one island
 * next time if the value is 1, we'll know there's other non-connected land, and repeat floodFill
 * at the end, all lands would be converted to @, and we'll get our count
 */

export default function numIslands (grid) {
  const r = grid.length;
  const c = grid[0] && grid[0].length;
  let counter = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === '1') {
        floodFill(grid, [i, j], '1', '@');
        // one island found and converted to @
        // so that connected nodes will not hit this condition of grid[i][j] === '1'
        counter++;
      }
    }
  }

  return counter;
}
