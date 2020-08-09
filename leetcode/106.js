/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let map = new Map();
    let postIdx = 0;
    let helper = (inLeft, inRight) => {
        if (inLeft > inRight)
            return null;
        let rootVal = postorder[postIdx];
        --postIdx;
        let root = new TreeNode(rootVal);
        let index = map.get(rootVal);
        root.right = helper(index + 1, inRight);
        root.left = helper(inLeft, index - 1);
        return root;
    };
    let idx = 0;
    for(let val of inorder) {
        map.set(val, idx++);
    }
    postIdx = postorder.length - 1;
    return helper(0, inorder.length - 1);
};