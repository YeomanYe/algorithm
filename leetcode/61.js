/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let len = 0;
    if(k === 0 || !head) return head;
    let p = head;
    while(p) {
        p = p.next;
        len++;
    }
    let pos = len - k % len;
    p = head;
    while(--pos >= 1) {
        p = p.next;
    }
    let q = p.next;
    p.next = null;
    let q2 = q;
    while(q && q.next) {
        q = q.next;
    }
    if(q) q.next = head;
    return q2 || head;
};