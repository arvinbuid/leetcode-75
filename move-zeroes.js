// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

const moveZeroes = function (nums) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]]; // in-place algorithm
      left++;
    }
  }
};

// Test Case: nums[0,1,0,3,12]
// Result: [1,3,12,0,0]
// Expected: [1,3,12,0,0]

// Big O:
//
// Time Complexity - O(n)
// Space Complexity - O(1)
