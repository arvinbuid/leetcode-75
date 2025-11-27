// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Algorithm should run O(n) time complexity
const productExceptSelf = function (nums) {
  let product = Array(nums.length).fill(1);
  let left = 1;
  let right = 1;

  // left to right
  for (let i = 0; i < nums.length; i++) {
    product[i] *= left;
    left *= nums[i];
  }

  // right to left
  for (let i = nums.length - 1; i >= 0; i--) {
    product[i] *= right;
    right *= nums[i];
  }
  return product;
};

// Test Case 1: nums = [1,2,3,4]
// Result: [24,12,8,6]
// Expected: [24,12,8,6]

// Test Case 2: nums = [-1,1,0,-3,3]
// Result: [0,0,9,0,0]
// Expected: [0,0,9,0,0]

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));

// Big O:
//
// Time Complexity: O(n)
// Space Complexity: O(n)
