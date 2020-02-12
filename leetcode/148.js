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
var sortList = function(head) {
    if(!head || !head.next) return head;
    let fast = head.next;
    let slow = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let right = sortList(slow.next);
    slow.next = null;
    let left = sortList(head);
    let ans = new ListNode(0);
    let h = ans;
    while(left && right) {
        if(left.val < right.val) {
            h.next = left;
            left = left.next;
        } else {
            h.next = right;
            right = right.next;
        }
        h = h.next;
    }
    h.next = left ? left : right;
    return ans.next;
};

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
var sortList = function(head) {
    let len = 0;
    let h = head;
    while(h) {
        h = h.next;
        len++;
    }
    let intv = 1;
    let ans = new ListNode(0);
    ans.next = head;
    while(intv < len) {
        let p = ans;
        let h = ans.next;
        while(h) {
            let h1 = h;
            let i = intv;
            while(i && h) {
                h = h.next;
                i--;
            }
            if(i > 0) break;
            let h2 = h;
            i = intv;
            while(i && h) {
                h = h.next;
                i--;
            }
            let c1 = intv, c2 = intv - i;
            while(c1 > 0 && c2 > 0) {
                if(h1.val < h2.val) {
                    p.next = h1;
                    c1--;
                    h1 = h1.next;
                } else {
                    p.next = h2;
                    c2--;
                    h2 = h2.next;
                }
                p = p.next;
            }
            p.next = c1 ? h1 : h2;
            while(c1 > 0 || c2 > 0) {
                p = p.next;
                c1--;
                c2--;
            }
            p.next = h;
        }
        intv *= 2;
    }
    return ans.next;
};