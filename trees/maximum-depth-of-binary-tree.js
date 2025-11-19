// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
//    3
//   / \
//  9   20
//     /  \
//    15   7
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

// Binary Tree Node
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Depth First Search
const maxDepth = function (root) {
  if (!root) return 0; // base case
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// Test Case 1: root = [3,9,20,null,null,15,7]
// Result: 3
// Expected: 3

// Test Case 2: root = [1,null,2]
// Result: 2
// Expected: 2

console.log(maxDepth([3, 9, 20, null, null, 15, 7]));
console.log(maxDepth([1, null, 2]));

// Big O:
//
// Time Complexity - O(n)
// Space Complexity - O(h)
