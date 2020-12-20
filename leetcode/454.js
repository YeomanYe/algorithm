/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
    let m = new Map();
    let t;
    let ans = 0;
    for(let a of A) for(let b of B) m.set(t = 0 - a - b, m.has(t) ? m.get(t) + 1 : 1);
    for(let c of C) for(let d of D) m.has(t = c + d) && (ans += m.get(t));
    return ans;
};