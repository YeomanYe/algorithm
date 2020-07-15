/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const queue = [];
    if(!head) return;
    let p = head;
    while(p.next) {
        queue.push(p.next);
        p = p.next;
    }
    let n = head;
    for(let i = 0, len = queue.length;i < len;i++) {
        if(i % 2 === 0) {
            n.next = queue.pop();
        } else {
            n.next = queue.shift();
        }
        n = n.next;
        n.next = null;
    }
};