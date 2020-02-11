/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];
    let backtrack = function (count, arr) {
        if(count === nums.length) ans.push([...arr]);
        for(let i = 0;i < nums.length;i++){
            if(arr.indexOf(nums[i]) < 0) {
                arr.push(nums[i]);
                backtrack(count + 1, arr);
                arr.pop();
            }
        }
    };
    backtrack(0,[]);
    return ans;
};