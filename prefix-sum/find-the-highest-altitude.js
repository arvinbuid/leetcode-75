// 1732. Find the Highest Altitude

// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

// Example 1:
// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

// Example 2:
// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

const largestAltitude = function (gain) {
  let altitude = 0;
  let maxAltitude = 0;
  for (let i = 0; i < gain.length; i++) {
    altitude += gain[i];
    maxAltitude = Math.max(altitude, maxAltitude);
  }
  return maxAltitude;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));

// Test Case 1: gain = [-5,1,5,0,-7]
// Result: 1
// Expected: 1

// Test Case 2: gain = [-4,-3,-2,-1,4,3,2]
// Result: 0
// Expected: 0

// Big O:
//
// Time Complexity - O(N)
// Space Complexity - O(1)
