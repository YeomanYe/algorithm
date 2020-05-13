/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = -Infinity, imax = 1, imin = 1;
    for(let n of nums) {
        if(n < 0) {
            let t = imax;
            imax = imin;
            imin = t;
        }
        imax = Math.max(imax * n, n);
        imin = Math.min(imin * n, n);

        max = Math.max(max, imax)
    }
    return max;
};