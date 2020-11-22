/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let res = [];
    for(let i = 0, len = nums.length;i < len;i++) {
        let n = nums[i];
        if (nums.indexOf(n) === nums.lastIndexOf(n)) {
            res.push(n);
        }
        if (res.length === 2) {
            return res;
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let result = [0, 0];
    let diff = 0;
    for (let n of nums) {
        diff ^= n;
    }
    let mask = diff & (-diff);
    for(let n of nums) {
        if ((mask & n) === 0) {
            result[0] ^= n;
        }
    }
    result[1] = diff ^ result[0];
    return result;
};