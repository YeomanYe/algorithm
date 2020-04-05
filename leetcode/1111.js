/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let ans = [];
    let i = 0;
    for(let c of seq) {
        ans[i++] = c === '(' ? i & 1 : (i + 1) & 1;
    }
    return ans;
};