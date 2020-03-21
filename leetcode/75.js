/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let color = [0, 0, 0];
    for(let n of nums) {
        color[n]++;
    }
    nums.fill(0, 0, color[0]);
    nums.fill(1, color[0], color[0] + color[1]);
    nums.fill(2, color[0] + color[1], color[0] + color[1] + color[2]);
};