/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    let result = 0;
    const traverse = function(node) {
        if (!node) return;
        ++result;
        traverse(node.left);
        traverse(node.right);
    };
    traverse(root);
    return result;
};