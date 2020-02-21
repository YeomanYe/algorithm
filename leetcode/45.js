/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let ans = Infinity;
    if(nums.length <= 1) return 0;
    let step = function (p, count) {
        if(p  >= nums.length - 1 || p + nums[p] >= nums.length - 1) return ans = Math.min(ans, count);
        let d = nums[p];
        let q = 0;
        let maxIndex = 0;
        for(let i = d;i > 0;i --) {
            let h = i + nums[p + i];
            if(h > q) {
                q = h;
                maxIndex = i;
            }
        }
        step(p + maxIndex,count + 1)
    };
    step(0, 1);
    return ans;
};