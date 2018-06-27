/**
 * @param {number[]} height
 * @return {number}
 */

// concept, for every building, water = min(leftMax, rightMax) - towerHeight
export default function trap (height) {
  let l = 0;
  let r = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  let water = 0;
  while (l < r) {
    if (height[l] < height[r]) {
      if (height[l] > leftMax) {
        leftMax = height[l];
        // can't store anything on highest building water will spill
      } else {
        water += leftMax - height[l];
      }
      l++;
    } else {
      if (height[r] > rightMax) {
        rightMax = height[r];
        // highest building, bail
      } else {
        water += rightMax - height[r];
      }
      r--;
    }
  }
  return water;
}
