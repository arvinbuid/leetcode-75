// 2215. Find the Difference of Two Arrays

// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// - answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// - answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

// Note that the integers in the lists may be returned in any order.

// My Solution:
const findDifference = function (nums1, nums2) {
  const a = new Set(nums1);
  const b = new Set(nums2);
  nums2.forEach((n) => a.delete(n));
  nums1.forEach((n) => b.delete(n));
  return [[...a], [...b]];
};

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// -1000 <= nums1[i], nums2[i] <= 1000

// Test Case: nums1=[1,2,3,3]
//            nums2=[1,1,2,2]
// Expected: [[3],[]]
// Output: [1,3,12,0,0]

// Big O:
//
// Time Complexity - O(n+m)
// Space Complexity - O(n+m)
