/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l = 0, r = nums.length - 1;
    let start = -1, end = -1;
    while(l <= r) {
        let mid = (l + r) >> 1;
        if(nums[mid] < target) {
            l = mid + 1;
        } else if(nums[mid] > target) {
            r = mid - 1;
        } else {
            let t = mid;
            while(nums[--t] === target);
            start = t + 1;
            t = mid;
            while(nums[++t] === target);
            end = t - 1;
            break;
        }
    }
    return [start, end];
};