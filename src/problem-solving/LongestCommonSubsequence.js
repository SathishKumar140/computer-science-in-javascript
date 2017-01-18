function max (a, b) {
  return a > b ? a : b;
}

export default function LongestCommonSubsequence (arr1, arr2, arr1Length, arr2Length) {
  if (arr1Length === 0 || arr2Length === 0) return 0; // wow!
  if (arr1[arr1Length - 1] === arr2[arr2Length - 1]) {
    return 1 + LongestCommonSubsequence(arr1, arr2, arr1Length - 1, arr2Length - 1);
  }
  return max(
    LongestCommonSubsequence(arr1, arr2, arr1Length - 1, arr2Length),
    LongestCommonSubsequence(arr1, arr2, arr1Length, arr2Length - 1),
  );
}
