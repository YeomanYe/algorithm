/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = [];
    let temp = [];
    let backtrack = function (i, c) {
        if(temp.length === k) {
            ans.push(temp.slice());
            return true;
        } else if(temp.length === 0 && n + 1 - i < k) return false;
        for(;i <= n;i++) {
            temp.push(i);
            if (backtrack(i + 1, c - 1) === false)  {
                return false;
            }
            temp.pop();
        }
    };
    backtrack(1, k);
    return ans;
};