/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let arr = [];
    let stack = [];
    let node = root;
    while(node || stack.length) {
        while(node) {
            stack.unshift(node);
            node = node.left;
        }
        node = stack.shift();
        arr.push(node.val);
        node = node.right;
    }
    return arr;
};