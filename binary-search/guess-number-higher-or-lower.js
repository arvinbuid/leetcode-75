// 374. Guess Number Higher or Lower

// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked (the number I picked stays the same throughout the game).

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).

// Return the number that I picked.

// Example 1:
// Input: n = 10, pick = 6
// Output: 6

// Example 2:
// Input: n = 1, pick = 1
// Output: 1

// Example 3:
// Input: n = 2, pick = 1
// Output: 1

// Binary Search Pattern
const guessNumber = function (n) {
  let low = 1;
  let high = n;
  while (low < high) {
    const mid = Math.floor((low + high) / 2); // middle number
    const result = guess(mid); // guess is pre-defined function
    if (result > 0) low = mid + 1;
    if (result < 0) high = mid - 1;
    if (result === 0) return mid;
  }
};

// Test Case 1: input: n = 10, pick = 6
// Result: 6
// Expected: 6

// Test Case 2: n = 1, pick = 1
// Result: 1
// Expected: 1

// Test Case 3: n = 2, pick = 1
// Result: 1
// Expected: 1

console.log(guessNumber(10));
console.log(guessNumber(1));
console.log(guessNumber(2));

// Big O:
//
// Time Complexity: O(logN)
// Space Complexity: O(1)
