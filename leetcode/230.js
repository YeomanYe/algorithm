/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let ans = 0;
    let inOrderTraverse = function (node) {
      k > 0 && node.left && inOrderTraverse(node.left);
      if(--k === 0) ans = node.val;
      k > 0 && node.right && inOrderTraverse(node.right);
    };
    inOrderTraverse(root);
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let inOrderTraverse = function* (node) {
        if(!node) return ;
        yield* inOrderTraverse(node.left);
        yield node.val;
        yield* inOrderTraverse(node.right);
    };
    let gen = inOrderTraverse(root);
    for(let i = 0;i < k - 1;i++) {
        gen.next();
    }
    return gen.next().value;
};