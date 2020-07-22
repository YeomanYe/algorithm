/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    let len = A.length;
    let max = 0;
    let pre_max = A[0] + 0;
    for(let i = 1;i < len;i++) {
        max = Math.max(pre_max + A[i] - i, max);
        pre_max = Math.max(pre_max, A[i] + i);
    }
    return max;
};