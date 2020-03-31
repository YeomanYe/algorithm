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
var preorderTraversal = function(root) {
    let ans = [];
    let queue = root ? [root] : [];
    while(queue.length) {
        let node = queue.pop();
        ans.push(node.val);
        if(node.right) queue.push(node.right);
        if(node.left) queue.push(node.left);
    }
    return ans;
};