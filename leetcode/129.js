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
var sumNumbers = function(root) {
    let sum = 0;
    let temp = 0;
    let backtrack = (node) => {
        temp = temp * 10 + node.val;
        if (!node.left && !node.right) {
            sum += temp;
            temp = (temp - node.val) / 10;
            return;
        }
        node.left && backtrack(node.left);
        node.right && backtrack(node.right);
        temp = (temp - node.val) / 10;
    };
    root && backtrack(root);
    return sum;
};