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
var postorderTraversal = function(root) {
    let ans = [];
    let stack = [];
    let cur = root;
    while(cur || stack.length) {
        if(cur) {
            ans.unshift(cur.val);
            stack.push(cur);
            cur = cur.right;
        } else {
            cur = stack.pop();
            cur = cur.left;
        }
    }
    return ans;
};

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
var postorderTraversal = function(root) {
    let ans = [];
  let postorder = function (node) {
      if(!node) return;
      postorder(node.left);
      postorder(node.right);
      ans.push(node.val);
  };
  postorder(root);
  return ans;
};