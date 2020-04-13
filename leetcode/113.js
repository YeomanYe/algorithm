/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let ans = [];
    if(!root) return ans;
    let temp = [root.val];
    let backtrack = function ({left, right}, cur) {
        if(cur === sum && left === null && right === null) {
            ans.push(temp.slice());
            return;
        }
        let children = [left, right];
        for(let c of children) {
            if(!c) continue;
            temp.push(c.val);
            backtrack(c, c.val + cur);
            temp.pop();
        }
    };
    backtrack(root, root.val);
    return ans;
};