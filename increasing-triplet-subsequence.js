// Medium Problem

// 334. Increasing Triplet Subsequence

// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Example 1:
// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.

// Example 2:
// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.

// Example 3:
// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: One of the valid triplet is (1, 4, 5), because nums[1] == 1 < nums[4] == 4 < nums[5] == 6.

const increasingTriplet = function (nums) {
  let f = Infinity;
  let s = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= f) {
      f = nums[i];
    } else if (nums[i] <= s) {
      s = nums[i];
    } else {
      return true;
    }
  }
  return false;
};

// Test Case 1: nums = [1,2,3,4,5]
// Result: true
// Expected: true

// Test Case 2: nums = [5,4,3,2,1]
// Result: false
// Expected: false

// Test Case 3: nums = [2,1,5,0,4,6]
// Result: true
// Expected: true

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));

// Big O:
//
// Time Complexity - O(n)
// Space Complexity - O(1)
