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
var recoverTree = function(root) {
    let firstNode, secondNode;
    let firstErr, secondErr;
    let finish = false;
    let inorder = function (node) {
        if(!node || finish) return;
        inorder(node.left);
        if(firstErr && node.val < firstNode.val) {
            secondErr = node;
            finish = true;
        }else if(firstNode && node.val < firstNode.val) {
            firstErr = firstNode;
            secondErr = node;
        }
        secondNode = firstNode;
        firstNode = node;
        inorder(node.right);
    };
    inorder(root);
    let temp = secondErr.val;
    secondErr.val = firstErr.val;
    firstErr.val = temp;
};