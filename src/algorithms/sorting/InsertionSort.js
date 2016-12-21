function swap (arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

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
