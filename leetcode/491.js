/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let result = [];
    let temp = [];
    let dfs = (cur, last) => {
        if (cur === nums.length) {
            if (temp.length >= 2) {
                result.push(temp.slice());
            }
            return;
        }
        let n = nums[cur];
        if (n >= last) {
            temp.push(n);
            dfs(cur + 1, n);
            temp.pop();
        }
        if (n !== last) {
            dfs(cur + 1, last);
        }
    };
    dfs(0, -Infinity);
    return result;
};