/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let ans = [1];
    for (let i = 1; i < nums.length; i++) {
        ans[i] = nums[i - 1] * ans[i - 1];
    }
    let res = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        res *= nums[i + 1];
        ans[i] *= res;
    }
    return ans;
};