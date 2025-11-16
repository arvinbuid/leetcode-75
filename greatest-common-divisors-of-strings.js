// 1071. Greatest Common Divisor of Strings

// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

const gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";
  let size = gcd(str1.length, str2.length);
  return str1.slice(0, size);
};

// Source - https://stackoverflow.com/a
// Posted by Yannis, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-16, License - CC BY-SA 3.0

// Based of Euclidean Algorithm
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (b > a) {
    let temp = a;
    a = b;
    b = temp;
  }
  while (true) {
    if (b == 0) return a;
    a %= b;
    if (a == 0) return b;
    b %= a;
  }
}

// Test Case 1: str1 = "ABCABC", str2 = "ABC"
// Result: ABC
// Expected: ABC

// Test Case 2: str1 = "ABABAB", str2 = "ABAB"
// Result: AB
// Expected: AB

// console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));

// Big O:
//
// Time Complexity - O(N + M + log(min(N, M)))
// Space Complexity - O(N + M)
