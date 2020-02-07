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
var detectCycle = function(head) {
    let l1 = head;
    let l2 = head;
    while(l1 && l2 && l2.next) {
        l1 = l1.next;
        l2 = l2.next.next;
        if(l1 === l2) {
            l1 = head;
            while(l1 && l2) {
                if(l1 === l2) return l1;
                l1 = l1.next;
                l2 = l2.next;
            }
        }
    }
    return null;
};