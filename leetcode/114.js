/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root) return;
    let p = new TreeNode(-1);
    let recursive = function(node) {
        const {left, right} = node;
        node.left = null;
        p.right = node;
        p = p.right;
        if(left) recursive(left);
        if(right) recursive(right);
    };
    recursive(root);
};