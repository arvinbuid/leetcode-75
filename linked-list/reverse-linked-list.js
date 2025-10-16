// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// In Leetcode, the function name should only be named 'reverseList' to pass the test cases.

const reverseListIterative = function (head) {
  let node = null;
  // [1, 2, 3, 4, 5]
  while (head) {
    const temp = head.next; // 2
    head.next = node; // null 2
    node = head;
    head = temp;
  }
  return node;
};

// Recursive Solution
const reverseListRecursive = function (head) {
  if (!head) return null; // base case
  let newHead = head;
  if (head.next) {
    newHead = reverseListRecursive(head.next); // call recursively
    head.next.next = head; // reverse the link between next node and head
  }
  head.next = null;
  return newHead;
};
