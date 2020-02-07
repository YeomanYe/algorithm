/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [];
    if(nums.length < 3) return ans;
    nums.sort((a,b) => a - b);
    for(let i = 0;i < nums.length - 2;i++) {
        if(nums[i] > 0) break;
        else if(nums[i] === nums[i - 1]) continue;
        let l = i + 1;
        let r = nums.length - 1;
        while(l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if(sum === 0) {
                ans.push([nums[i], nums[l], nums[r]]);
                while(l < r && nums[l] === nums[l + 1]) l++;
                while(l < r && nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            } else if(sum < 0) {
                l++;
            } else {
                r--;
            }
        }
    }
    return ans;
};