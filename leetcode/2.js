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
    let head = l1;
    let carry = 0;
    let last;
    do{
        let n = l1.val + l2.val + carry;
        l1.val = n % 10;
        last = l1;
        l1 = l1.next ? l1.next : l1.next = {val: 0, next: null};
        carry = parseInt(n / 10);
        l2 = l2.next;
    } while(l2);
    while(carry) {
        let n = l1.val + carry;
        l1.val = n % 10;
        last = l1;
        l1 = l1.next ? l1.next : l1.next = {val: 0, next: null};
        carry = parseInt(n / 10);
    }
    if(!last.next.val && !l1.next) last.next = null;
    return head;
};

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
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    let head = new ListNode();
    let result = head;
    let carry = 0;
    do{
        let n = l1.val + l2.val + carry;
        result.next = new ListNode(n % 10);
        result = result.next;
        carry = parseInt(n / 10);
        l1 = l1.next;
        l2 = l2.next;
    } while(l1 && l2);
    let l = l1 ? l1 : l2;
    while(l) {
        let n = l.val + carry;
        result.next = new ListNode(n % 10);
        result = result.next;
        carry = parseInt(n / 10);
        l = l.next;
    }
    if(carry) {
        result.next = new ListNode(carry);
    }
    return head.next;
};