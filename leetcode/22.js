/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = [];
    let backtrack = function (n, left, temp) {
        if(n === 0) {
            ans.push(temp);
        } else if(left === 0) {
            backtrack(n - 1,left + 1,temp + '(');
        } else if(n - 1 > left){
            backtrack(n - 1,left + 1, temp + '(');
            backtrack(n - 1, left - 1, temp + ')');
        } else {
            backtrack(n - 1,left - 1, temp + ')');
        }
    };
    backtrack(n * 2, 0, '');
    return ans;
};