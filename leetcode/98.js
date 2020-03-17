/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let lastVal = -Infinity, finish = false;
    let inOrder = function (node) {
        if(!node || finish) return;
        inOrder(node.left);
        if(node.val <= lastVal) {
            finish = true;
        } else {
            lastVal = node.val;
        }
        inOrder(node.right);
    };
    inOrder(root);
    return !finish;
};