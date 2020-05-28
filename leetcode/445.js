/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let arr1 = [];
    let arr2 = [];
    let p = l1;
    while (p) {
        arr1.push(p.val);
        p = p.next;
    }
    p = l2;
    while (p) {
        arr2.push(p.val);
        p = p.next;
    }
    let tail;
    let c = 0;
    while (arr1.length && arr2.length) {
        let a1 = arr1.pop();
        let a2 = arr2.pop();
        let s = a1 + a2 + c;
        c = parseInt(s / 10);
        let h = new ListNode(s % 10);
        if(!tail) {
            tail = h;
        } else {
            h.next = tail;
            tail = h;
        }
    }
    let arr = arr1.length ? arr1 : arr2;
    while(arr.length) {
        let s = arr.pop() + c;
        c = parseInt(s / 10);
        let h = new ListNode(s % 10);
        if(!tail) {
            tail = h;
        } else {
            h.next = tail;
            tail = h;
        }
    }
    if (c) {
        let h = new ListNode(c);
        h.next = tail;
        tail = h;
    }
    return tail;
};