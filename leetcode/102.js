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
var levelOrder = function(root) {
    let queue = [root];
    let ans = [];
    //防止根节点为空的情况
    while (queue[0]) {
        let len = queue.length;
        let level = [];
        for(let i = 0;i < len;i++){
            let node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            level.push(node.val);
        }
        ans.push(level);
    }
    return ans;
};