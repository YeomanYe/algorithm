/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    let generate = function(s, e) {
        let arr = [];
        if(s > e) {
            return [null];
        }
        for(let i = s;i <= e;i++) {
            let lefts = generate(s, i - 1);
            let rights = generate(i + 1, e);

            for(let l of lefts) {
                for(let r of rights) {
                    let c = new TreeNode(i);
                    c.left = l;
                    c.right = r;

                    arr.push(c);
                }
            }
        }
        return arr;
    };
    if(n === 0) {
        return [];
    }
    return generate(1, n);
};