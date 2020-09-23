/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    for(let i = 0;i < nums.length;i++) {
        nums[i] = nums[i] + '';
    }
    nums.sort((a, b) => {
        return a + b >= b + a ? 1 : -1;
    });
    let result = '';
    if (nums[0] === '0')
        return '0';
    for(let n of nums) {
        result += n;
    }
    return result;
};