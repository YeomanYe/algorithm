/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let build = function(ps, pe, is, ie) {
        let root = new TreeNode(preorder[ps]);
        if(ps === pe) return root;
        let i = is;
        while(i < ie) {
            if(inorder[i] === root.val) break;
            i++;
        }
        if(is <= i - 1) {
            root.left = build(ps + 1, ps + (i - is), is, i - 1);
        }
        if(i + 1 <= ie) {
            root.right = build(ps + (i - is) + 1, pe, i + 1, ie);
        }
        return root;
    };
    if(!preorder.length || !inorder.length || inorder.length !== preorder.length) return null;
    return build(0, preorder.length - 1, 0, inorder.length - 1);
};