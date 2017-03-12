export default function FindOddOccurrences (arr = []) {
  let oddNumber = arr[0];

  // XORing all the elements, read more here
  // https://en.wikipedia.org/wiki/Bitwise_operation#XOR
  // XOR flips the bits, all even numbers will cancel each other
  for (let i = 1; i <= arr.length; i++) oddNumber ^= arr[i];

  return oddNumber;
}
