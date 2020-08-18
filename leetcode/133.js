/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;
    let map = new Map();
    let initVal = node.val;
    let q = [node];
    let p = [];
    while(q.length) {
        let n = q.pop();
        let n1 = p.pop() || new Node(n.val);
        map.set(n1.val, n1);
        for(let e of n.neighbors) {
            let n2 = map.get(e.val) || new Node(e.val);
            n1.neighbors.push(n2);
            if(!map.has(e.val)) {
                p.push(n2);
                q.push(e);
            }
            map.set(n2.val, n2);
        }
    }
    let n = map.get(initVal);
    return n;
};