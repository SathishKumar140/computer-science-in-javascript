/* traverse an n*n matrix in a spiral manner
 * input: [ [1, 2, 3],
 *          [4, 5, 6],
 *          [7, 8, 9]
 *        ]
 *
 * output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

export default function (arr) {
  // bounds
  let leftBound = 0;
  let rightBound = arr.length - 1;
  let topBound = 0;
  let bottomBound = arr.length - 1;

  // current coordinates
  let row = 0;
  let col = 0;

  const spiralTraversed = [arr[row][col]];

  while (leftBound <= rightBound && topBound <= bottomBound) {
    while (col < rightBound) {
      spiralTraversed.push(arr[row][++col]);
    }
    topBound++;
    while (row < bottomBound) {
      spiralTraversed.push(arr[++row][col]);
    }
    rightBound--;
    while (col > leftBound) {
      spiralTraversed.push(arr[row][--col]);
    }
    bottomBound--;
    while (row > topBound) {
      spiralTraversed.push(arr[--row][col]);
    }
    leftBound++;
  }
  return spiralTraversed;
}
