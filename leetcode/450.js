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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    let newRoot = new TreeNode();
    newRoot.left = root;
    let parent = newRoot;
    let cur;
    const find = (node) => {
        if (!node) return;
        if (node.val > key) {
            parent = node;
            find(node.left);
        } else if(node.val < key) {
            parent = node;
            find(node.right);
        } else {
            cur = node;
        }
    };
    find(root);
    let delChild = (rep) => {
        if (parent.left === cur) {
            parent.left = rep;
        } else {
            parent.right = rep;
        }
    };
    if (cur) {
        let {left, right} = cur;
        if (!left && !right) {
            delChild(null);
        } else if(left && !right) {
            delChild(left);
        } else if(!left && right) {
            delChild(right);
        } else if(left && right) {
            delChild(left);
            while(left.right) left = left.right;
            left.right = right;
        }
    }
    return newRoot.left;
};