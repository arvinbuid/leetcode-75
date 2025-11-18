// 643. Maximum Average Subarray I

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted. (10-5 = 0.00001)

// Example 1:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Example 2:
// Input: nums = [5], k = 1
// Output: 5.00000

// Fixed Length Sliding Window
const findMaxAverage = function (nums, k) {
  let curSum = 0;
  // build first window of the size k
  for (let i = 0; i < k; i++) {
    curSum += nums[i];
  }
  let maxAvg = curSum; // 2
  // Slide window from start to end of nums
  for (let i = k; i < nums.length; i++) {
    curSum += nums[i] - nums[i - k];
    maxAvg = Math.max(curSum, maxAvg);
  }
  return maxAvg / k;
};

// Test Case 1: nums = [1,12,-5,-6,50,3], k = 4
// Result: 12.75000
// Expected: 12.75000

// Test Case 2: nums = [5], k = 1
// Result: 5.00000
// Expected: 5.00000

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));

// Big O:
//
// Time Complexity - O(N)
// Space Complexity - O(1)
