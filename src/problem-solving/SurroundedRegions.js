// leetcode.com/problems/surrounded-regions/description/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// step - 1: traverse the edges and make all O -> @
// step - 2: traverse the matrix, change all O -> X
// step - 3: traverse the matrix again and change @ -> O
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

export default function solve (board) {
  const r = board.length;
  const c = board[0] && board[0].length;

  for (let i = 0; i < c; i++) {
    // top
    if (board[0][i] === 'O') floodFill(board, [0, i], 'O', '@');
    // bottom
    if (board[r - 1][i] === 'O') floodFill(board, [r - 1, i], 'O', '@');
  }

  for (let i = 0; i < r; i++) {
    // left row
    if (board[i][0] === 'O') floodFill(board, [i, 0], 'O', '@');

    // right row
    if (board[i][c - 1] === 'O') floodFill(board, [i, c - 1], 'O', '@');
  }

  // step - 2
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (board[i][j] === 'O') board[i][j] = 'X';
    }
  }

  // step 3
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (board[i][j] === '@') board[i][j] = 'O';
    }
  }
}
