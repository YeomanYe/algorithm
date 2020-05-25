/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let len = nums.length;
    let l = 1;
    let r = len - 1;
    while(l < r) {
        let mid = (l + r + 1) >> 1;
        let cnt = 0;
        for(let n of nums) {
            if(n < mid) {
                cnt++;
            }
        }

        if(cnt >= mid) {
            r = mid - 1;
        } else {
            l = mid;
        }
    }
    return l;
};