/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(!nums.length) return -1;
    let s = 0, e = nums.length - 1;
    while(s <= e){
        let mid = s + parseInt((e - s) / 2);
        if(target === nums[mid]) return mid;
        if(nums[mid] < nums[e]) {
            if(target > nums[mid] && target <= nums[e]) {
                s = mid + 1;
            } else {
                e = mid - 1;
            }
        } else {
            if(target >= nums[s] && target < nums[mid]) {
                e = mid - 1;
            } else {
                s = mid + 1;
            }
        }
    }
    return nums[s] === target ? s : -1;
};