/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let map = new Map();
    let p = head;
    const getNewNode = (p) => {
        let n;
        if (map.has(p)) {
            n = map.get(p);
        } else {
            n = new Node(p.val);
            map.set(p, n);
        }
        return n;
    };
    while(p) {
        const t = getNewNode(p);
        const t1 = p.next && getNewNode(p.next);
        const t2 = p.random && getNewNode(p.random);
        t.next = t1;
        t.random = t2;
        p = p.next;
    }
    return map.get(head);
};