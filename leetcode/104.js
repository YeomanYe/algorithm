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
var maxDepth = function(root) {
    let ans = 0;
    let calDepth = function (node, count) {
        if(!node) return ans = Math.max(ans, count);
        calDepth(node.left, count + 1);
        calDepth(node.right, count + 1);
    };
    calDepth(root, 0);
    return ans;
};