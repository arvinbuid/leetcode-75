// LEETCODE SOLUTIONS

// 1137. N-th Tribonacci Number

// The Tribonacci sequence Tn is defined as follows:

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

// Bottom-up Approach
const tribonacci = function (n) {
  if (n < 3) return 0;
  let t = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    t[i] = t[i - 1] + t[i - 2] + t[i - 3];
  }
  return t[n];
};

// Test Cases
console.log(tribonacci(4));
console.log(tribonacci(100));
