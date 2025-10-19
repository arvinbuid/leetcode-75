// 700. Search in a Binary Search Tree

// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

const searchBST = function (root, val) {
  if (root === null) return undefined;
  let current = root;
  let found = false;
  while (current && !found) {
    if (val < current.val) {
      current = current.left;
    } else if (val > current.val) {
      current = current.right;
    } else {
      found = true;
    }
  }
  if (!found) return null;
  return current;
};

// Constraints:

// The number of nodes in the tree is in the range [1, 5000].
// 1 <= Node.val <= 107
// root is a binary search tree.
// 1 <= val <= 107

// Big O:
//
// Time Complexity - O(log n)
// Space Complexity - O(1)
