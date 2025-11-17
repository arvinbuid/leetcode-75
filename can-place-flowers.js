// 605. Can Place Flowers

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

const canPlaceFlowers = function (flb, n) {
  for (let i = 0; i < flb.length; i++) {
    if (!flb[i - 1] && !flb[i] && !flb[i + 1]) {
      flb[i] = 1; // plant the flower
      n--; // decrement n indicating a flower is planted successfully
    }
  }
  return n <= 0 ? true : false;
};

// Test Case 1: flowerbed = [1,0,0,0,1], n = 1
// Result: true
// Expected: true

// Test Case 2: flowerbed = [1,0,0,0,1], n = 2
// Result: false
// Expected: false

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));

// Big O:
//
// Time Complexity - O(N)
// Space Complexity - O(1)
