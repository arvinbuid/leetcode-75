// 199. Binary Tree Right Side View

// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:
// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Example 2:
// Input: root = [1,2,3,4,null,null,null,5]
// Output: [1,3,4,5]

// Example 3:
// Input: root = [1,null,3]
// Output: [1,3]

// Example 4:
// Input: root = []
// Output: []

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const rightSideView = function (root) {
  if (!root) return []; // edge case
  let result = [];
  let q = [root]; // add the root in the queue
  while (q.length > 0) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      let node = q.shift(); // remove first element in the queue
      if (i === len - 1) result.push(node.val); //
      if (node.left !== null) q.push(node.left); // enqueue left child
      if (node.right !== null) q.push(node.right); // enqueue right child
    }
  }
  return result;
};

// Test Case 1: root = [1,2,3,null,5,null,4]
// Result: [1,3,4]
// Expected: [1,3,4]

// Test Case 2: root = [1,2,3,4,null,null,null,5]
// Result: [1,3,4,5]
// Expected: [1,3,4,5]

// Test Case 3:  root = [1,null,3]
// Result: [1,3]
// Expected: [1,3]

// Test Case 4: root = []
// Result: []
// Expected: []

console.log(rightSideView([1, 2, 3, 4, null, null, null, 5]));
console.log(rightSideView([1, 2, 3, 4, null, null, null, 5]));
console.log(rightSideView([1, null, 3]));
console.log(rightSideView([]));

// Big 0:
//
// Time Complexity - O(n)
// Space Complexity - 0(n) || O(w)
