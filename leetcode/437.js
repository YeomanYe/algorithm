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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    let total = 0;
    let result = 0;
    if(!root) return result;
    let backtrack = function (node) {
        total += node.val;
        if (total === sum) {
            result += 1;
        }
        node.left && backtrack(node.left);
        node.right && backtrack(node.right);
        total -= node.val;
    };
    let nodes = [root];
    let index = 0;
    while(nodes.length > index) {
        let n = nodes[index++];
        n.left && nodes.push(n.left);
        n.right && nodes.push(n.right);
    }
    for(let n of nodes) {
        backtrack(n);
    }
    return result;
};