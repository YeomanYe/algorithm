/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists.length) return null;
    return merge(lists, 0, lists.length - 1);
    function merge(lists, s, e) {
        if(s === e) return lists[s];
        let mid = s + parseInt((e - s) / 2);
        let left = merge(lists, s, mid);
        let right = merge(lists, mid + 1, e);
        return mergeLists(left, right);
    }
    function mergeLists(l1, l2) {
        if(l1 == null) return l2;
        if(l2 == null) return l1;
        if(l1.val < l2.val) {
            l1.next = mergeLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeLists(l1, l2.next);
            return l2;
        }
    }
};