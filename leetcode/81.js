/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while(left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if(nums[mid] === target) return true;
        if(nums[left] === nums[mid]) {
            left++;
            continue;
        }
        if(nums[right] > nums[mid]) {
            if(target <= nums[right] && target > nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if(target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else  {
                left = mid + 1;
            }
        }
    }
    return false;
};