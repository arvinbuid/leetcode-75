// 1768. Merge Strings Alternately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

const mergeAlternately = function (word1, word2) {
  let merged = "";
  const maxLength = Math.max(word1.length, word2.length); // store maximum length between word1 and word2
  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) merged += word1[i];
    if (i < word2.length) merged += word2[i];
  }
  return merged;
};

console.log(mergeAlternately("abc", "pqr"));

// Big O:
//
// Time Complexity - O(n)
// Space Complexity - O(n)
