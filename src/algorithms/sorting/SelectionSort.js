// swaps values at index i and j of array arr
function swap (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export default function SelectionSort (arr) {
  // runs till one less than length of the array
  // because the inner loop starts from i + 1
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }

  return arr;
}
