/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = head, fast = head;
    let i = n;
    while(i > 0) {
        fast = fast.next;
        i--;
    }
    while(fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    if(!fast) head = head.next;
    else {
        slow.next = slow.next.next;
    }
    return head;
};