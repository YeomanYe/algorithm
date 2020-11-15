/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    if (!root) {
        return result;
    }
    let q = [root];
    while(q.length) {
        let p = [];
        let temp = [];
        for(let i = 0, len = q.length;i < len;i++) {
            temp.push(q[i].val);
            p.push(...q[i].children);
        }
        q = p;
        result.push(temp);
    }
    return result;
};