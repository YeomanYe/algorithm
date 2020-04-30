/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let lastVal;
    let dupCnt = 0;
    let curDup = 0;
    let dupPos = [];
    for(let i = 0;i < nums.length;i++) {
        let n = nums[i];
        if(n === lastVal) {
            curDup++;
        } else {
            curDup = 0;
        }
        lastVal = n;
        if(curDup > 1) {
            dupPos.push(i);
            dupCnt++;
        }
    }
    let offset = 1;
    while(dupPos.length) {
        let s = dupPos.shift();
        let e = dupPos[0] || nums.length - 1;
        while(s < e) {
            ++s;
            nums[s - offset] = nums[s];
        }
        offset++;
    }
    return nums.length - dupCnt;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 3) return nums.length;
    let k = 2;
    for(let i = 2, len = nums.length;i < len;i++) {
        if(nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};