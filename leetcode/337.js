/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    if (!root) return 0;
    let money = root.val;
    if (root.left) {
        money += rob(root.left.left) + rob(root.left.right);
    }
    if (root.right) {
        money += rob(root.right.left) + rob(root.right.right);
    }
    return Math.max(money, rob(root.left) + rob(root.right));
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
 * @return {number}
 */
var rob = function(root) {
    let robInternal = function (root) {
        if (!root) return 0;
        if (cacheMaps.has(root)) {
            return cacheMaps.get(root);
        }
        let money = root.val;
        if (root.left) {
            money += robInternal(root.left.left) + robInternal(root.left.right);
        }
        if (root.right) {
            money += robInternal(root.right.left) + robInternal(root.right.right);
        }
        let val = Math.max(money, robInternal(root.left) + robInternal(root.right));
        cacheMaps.set(root, val);
        return val;
    };
    let cacheMaps = new Map();
    return robInternal(root);
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
 * @return {number}
 */
var rob = function(root) {
    let robInternal = function (root) {
        if (!root) return [0, 0];
        let left = robInternal(root.left);
        let right = robInternal(root.right);
        let r1 = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        let r2 = left[0] + right[0] + root.val;
        return [r1, r2];
    };
    const result = robInternal(root);
    return Math.max(result[0], result[1]);
};