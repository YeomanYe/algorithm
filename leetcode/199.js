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
var rightSideView = function(root) {
    let ans = [];
    if(!root) return ans;
    ans.push(root.val);
    let maxLv = 0;
    let recursive = function({left, right}, lv) {
        let arr = [right, left];
        for(let node of arr) {
            if(node) {
                if(lv > maxLv) ans.push(node.val);
                maxLv = Math.max(maxLv, lv);
                recursive(node, lv + 1);
            }
        }
    };
    recursive(root, 1);
    return ans;
};