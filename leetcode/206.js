/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || !head.next) return head;
    let last = head;
    let next = head.next;
    last.next = null;
    while(next.next !== null) {
        let tmp = next.next;
        next.next = last;
        last = next;
        next = tmp;
    }
    next.next = last;
    return next;
};