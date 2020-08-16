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
var insertionSortList = function(head) {
    if(!head || !head.next)
        return head;
    let dummyhead = new ListNode(-1);
    dummyhead.next = head;
    let prev = head;
    let node = head.next;
    while (node)
    {
        if (node.val < prev.val)
        {
            let temp = dummyhead;
            while (temp.next.val < node.val)
            {
                temp = temp.next;
            }
            prev.next = node.next;
            node.next = temp.next;
            temp.next = node;
            node = prev.next;
        }
    else
        {
            prev = prev.next;
            node = node.next;
        }
    }
    return dummyhead.next;
};