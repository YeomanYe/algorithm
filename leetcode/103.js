/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let result = [];
    if(!root) return result;
    let nodeQ = [root];
    let reverse = false;
    while(nodeQ.length) {
        let vals = [];
        for(let i = 0, len = nodeQ.length;i < len;i++){
            let node = nodeQ.shift();
            if(reverse) vals.unshift(node.val);
            else vals.push(node.val);
            if(node.left) nodeQ.push(node.left);
            if(node.right) nodeQ.push(node.right);
        }
        reverse = !reverse;
        result.push(vals);
    }
    return result;
};