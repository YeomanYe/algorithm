/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length;
    let stack = [];
    let resultArr = [];
    for (let i = 2 * n - 1; i >= 0; i--) {
        while (stack.length && nums[i % n] >= stack[stack.length - 1]) {
            stack.pop();
        }
        resultArr[i % n] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(nums[i % n]);
    }
    return resultArr;
};