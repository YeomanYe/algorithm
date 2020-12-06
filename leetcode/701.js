/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root) {
        return new TreeNode(val);
    }
    let node = root;
    let last = null;
    let isLeft = true;
    while(node) {
        last = node;
        if (node.val > val) {
            node = node.left;
            isLeft = true;
        } else {
            node = node.right;
            isLeft = false;
        }
    }
    last[isLeft ? 'left' : 'right'] = new TreeNode(val);
    return root;
};