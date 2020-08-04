/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let sum = 0;
    let ans = [];
    let temp = [];
    let backtrack = function (index, c) {
        if (c === k && n === sum) {
            ans.push(temp.slice());
        } else if(sum > n) {
            return false;
        }
        for(let i = index + 1;i < 10;i++) {
            sum += i;
            temp.push(i);
            let res = backtrack(i, c + 1);
            temp.pop();
            sum -= i;
            if (res === false) {
                return;
            }
        }
    };
    backtrack(0, 0);
    return ans;
};