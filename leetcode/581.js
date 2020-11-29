/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let start = 0;
    let end = 0;
    let newNums = [...nums];
    let last = Infinity;
    newNums.sort((a, b) => a - b);
    for (let i = 0, len = nums.length;i < len;i++) {
        let n = nums[i];
        if (last !== n && newNums.indexOf(n) !== i) {
            start = i;
            break;
        }
        last = n;
    }
    last = Infinity;
    for (let i = nums.length - 1;i >= 0;i--) {
        let n = nums[i];
        if (last !== n && newNums.lastIndexOf(n) !== i) {
            end = i;
            break;
        }
        last = n;
    }
    return end ? end - start + 1 : 0;
};