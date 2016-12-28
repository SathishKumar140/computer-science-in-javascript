export default function QuickSort (arr = []) {
  if (arr.length < 2) return arr;

  // choose a pivot, first element here
  const pivot = arr[0];

  const lower = arr.slice(1).filter(n => n < pivot);
  const higher = arr.slice(1).filter(n => n >= pivot);

  return [...QuickSort(lower), pivot, ...QuickSort(higher)];
}
