/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    let dep = 0;
    let res = root.val;
    let bt = (node, cur) => {
        node.left && bt(node.left, cur + 1);
        node.right && bt(node.right, cur + 1);
        if (cur > dep) {
            dep = cur;
            res = node.val;
        }
    };
    bt(root, dep);
    return res;
};