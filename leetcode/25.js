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
var reverseKGroup = function(head, k) {
    let ans = new ListNode(0);
    let h = ans;
    let temp = head;
    while(true) {
        let stack = [];
        let i = k;
        let first = temp;
        while(i-- > 0 && temp) {
            stack.push(temp);
            temp = temp.next;
        }
        if(i !== -1) {
            h.next = first;
            break;
        }
        while(stack.length) {
            let node = stack.pop();
            h.next = node;
            h = h.next;
        }
        if(!temp) h.next = null;
    }
    return ans.next;
};