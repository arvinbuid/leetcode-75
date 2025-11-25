// 872. Leaf-Similar Trees

// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

// Example 1:
// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4],
//        root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true

// Example 2:
// Input: root1 = [1,2,3],
//        root2 = [1,3,2]
// Output: true

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const leafSimilar = function (root1, root2) {
  let leaf1 = [];
  let leaf2 = [];
  dfs(root1, leaf1);
  dfs(root2, leaf2);
  return JSON.stringify(leaf1) === JSON.stringify(leaf2);
};

const dfs = (root, leaf) => {
  if (!root) return;
  if (!root.left && !root.right) {
    leaf.push(root.val);
    return;
  }
  // recursively call dfs() to traverse the tree from top to bottom
  dfs(root.left, leaf);
  dfs(root.right, leaf);
};

// Test Case 1: root1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4], root2 = [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]
// Result: true
// Expected: true

// Test Case 2: root = root1 = [1,2,3], root2 = [1,3,2]
// Result: true
// Expected: true

console.log(
  leafSimilar(
    [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
    [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]
  )
);

// Big O:
//
// Time Complexity - O(t1 + t2)
// Space Complexity - 0(h1 + h2)
