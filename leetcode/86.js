/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let h = new ListNode(-1);
    let ans = h;
    let q = head;
    let t = new ListNode(-1);
    let tail = t;
    while(q) {
        if(q.val >= x) {
            t.next = new ListNode(q.val);
            t = t.next;
        } else {
            h.next = new ListNode(q.val);
            h = h.next;
        }
        q = q.next;
    }
    h.next = tail.next;
    return ans.next;
};