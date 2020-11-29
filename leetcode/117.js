/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root){
    if (!root) return root;
    let q = [root];
    while(q.length) {
        let len = q.length;
        let last = null;
        for(let i = 0;i < len;i++) {
            let n = q.shift();
            if (n.left) {
                q.push(n.left);
            }
            if (n.right) {
                q.push(n.right);
            }
            if (last) {
                last.next = n;
            }
            last = n;
        }
    }
    return root;
};


/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root){
    let start = root;
    let last, nextStart;
    let handleNext = (p) => {
        if (last) {
            last.next = p;
        }
        if (!nextStart) {
            nextStart = p;
        }
        last = p;
    };
    while(start) {
        last = null;
        nextStart = null;
        let p = start;
        while (p) {
            if (p.left) {
                handleNext(p.left);
            }
            if (p.right) {
                handleNext(p.right);
            }
            p = p.next;
        }
        start = nextStart;
    }
    return root;
};