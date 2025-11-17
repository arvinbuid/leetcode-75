// 392. Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

const isSubsequence = function (s, t) {
  let i = 0,
    j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++; // increment when match is found
    }
    j++; // always increment in every iteration
  }
  return i === s.length ? true : false;
};

// Test Case 1: s = "abc", t = "ahbgdc"
// Result: true
// Expected: true

// Test Case 2: s = "axc", t = "ahbgdc"
// Result: false
// Expected: false

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));

// Big O:
//
// Time Complexity - O(N) / O(T)
// Space Complexity - O(1)
