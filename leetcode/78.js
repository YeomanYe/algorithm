/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = [];
    let backtrack = function (k, arr) {
        ans.push([...arr]);
        for(let i = k;i < nums.length;i++){
            arr.push(nums[i]);
            backtrack(i + 1, arr);
            arr.pop();
        }
    };
    backtrack(0, []);
    return ans;
};