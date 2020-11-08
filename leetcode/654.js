/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if (!nums.length) return null;
    let n = Math.max(...nums);
    const root = new TreeNode(n);
    const m = nums.indexOf(n);
    root.left = constructMaximumBinaryTree(nums.slice(0, m));
    root.right = constructMaximumBinaryTree(nums.slice(m + 1));
    return root;
};