// 1207. Unique Number of Occurrences

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// My Solution:
const uniqueOccurrences = function (arr) {
  const f = new Map();
  for (el of arr) {
    f.set(el, (f.get(el) || 0) + 1);
  }
  u = new Set(f.values()); // store unique frequencies
  return u.size === f.size;
};

// Constraints:

// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000

// Test Case: [1,2,2,1,1,3]
// Output: true
// Expected: true

// Big O:
//
// Time Complexity - O(n)
// Space Complexity - O(n)
