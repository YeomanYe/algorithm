/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let temp = [];
    let ans = [];
    nums.sort((a, b) => a - b);
    let backtrack = function (start) {
        ans.push(temp.slice());
        for(let i = start, len = nums.length;i < len;i++) {
            if(i > start && nums[i - 1] === nums[i]) continue;
            temp.push(nums[i]);
            backtrack(i + 1);
            temp.pop();
        }
    };
    backtrack(0);
    return ans;
};