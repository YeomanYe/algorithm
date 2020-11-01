/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let one = 0;
    let two = 0;
    for(let n of nums) {
        one = one ^ n & ~two;
        two = two ^ n & ~one;
    }
    return one;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = 0;
    for(let i = 0;i < 32;i++) {
        let count = 0;
        for(let j = 0, len = nums.length;j < len;j++) {
            if ((nums[j] >> i & 1) === 1) {
                count ++;
            }
        }
        if (count % 3 !== 0) {
            ans = ans | 1 << i;
        }
    }
    return ans;
};