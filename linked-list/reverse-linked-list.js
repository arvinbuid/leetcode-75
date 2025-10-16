// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

const reverseList = function (head) {
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
