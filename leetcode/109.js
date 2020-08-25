/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    let buildBST =  (s, e) => {
        if (s > e) return null;
        let mid = Math.ceil((s + e) / 2);
        let root = new TreeNode(arr[mid]);
        root.left = buildBST(s, mid - 1);
        root.right = buildBST(mid + 1, e);
        return root;
    };
    return buildBST(0, arr.length - 1);
};