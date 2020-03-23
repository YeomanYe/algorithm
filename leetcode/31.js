/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let reverse = function (s) {
        let e = nums.length - 1;
        while(s < e) {
            swap(s, e);
            s++;
            e--;
        }
    };
    let swap = function (i,j) {
        let t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    };
    let i = nums.length - 2;
    while(i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if(i >= 0) {
        let j = nums.length - 1;
        while(j > 0 && nums[j] <= nums[i]){
            j--;
        }
        swap(i,j);
    }
    reverse(i+1);
};