/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let newHead = new ListNode(-1);
    newHead.next = head;
    let p = newHead;
    n = n - m;
    while(--m) {
        p = p.next;
    }
    let pre = p;
    p = p.next;
    let q = p;
    pre.next = null;
    console.log(pre);

    while(n--) {
        p = p.next;
    }
    let last = p ? p.next : null;
    p.next = null;
    console.log(last);


    p = q;
    let q0 = q;
    q = q.next;
    q0.next = null;
    while(q) {
        let t = q.next;
        q.next = q0;
        q0 = q;
        q = t;
    }
    p.next = last;
    pre.next = q0;
    return newHead.next;
};