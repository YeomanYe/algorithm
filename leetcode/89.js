/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let ans = [];
    let backtrack = function (n, str, isZero) {
        if(n === 0) {
            ans.push(parseInt(str || '0', 2));
            return;
        }
        if(isZero) {
            backtrack(n - 1, str + '0', isZero);
            backtrack(n - 1, str + '1', !isZero);
        } else {
            backtrack(n - 1, str + '1', !isZero);
            backtrack(n - 1, str + '0', isZero);
        }
    };
    backtrack(n, '', true);
    return ans;
};