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
var swapPairs = function(head) {
    let slow = head;
    let fast = head && head.next;
    let ans = head && head.next || head;
    while(fast) {
        let temp = fast.next;
        fast.next = slow;
        slow.next = temp;
        fast = temp;
        if(fast) {
            fast = fast.next;
            if(fast) slow.next = fast;
            slow = temp;
        }
    }
    return ans;
};