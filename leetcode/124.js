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
var maxPathSum = function(root) {
    let ans = -Infinity;
    let calPathSum = function (node) {
        if (!node) return 0;
        let left = calPathSum(node.left);
        let right = calPathSum(node.right);
        ans = Math.max(ans, node.val + Math.max(0, left) + Math.max(0, right));
        return node.val + Math.max(0, left, right);
    };
    calPathSum(root);
    return ans;
};