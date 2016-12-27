function swap (arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// i goes from 0 - length and with every new iteration
// it keeps the array sorted from 0 - i
export default function InsertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while ((j > 0) && (arr[j] < arr[j - 1])) {
      swap(arr, j, j - 1);
      j -= 1;
    }
  }

  return arr;
}
