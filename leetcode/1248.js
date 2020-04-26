/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let left = 0, right = 0, ans = 0, odd = 0;
    while(right < nums.length) {
        if(nums[right++] % 2 === 1) {
            odd++;
        }
        if(odd === k) {
            odd--;
            let temp = right;
            while(right < nums.length && nums[right] % 2 !== 1) {
                right++;
            }
            let rightCnt = right - temp;
            let leftCnt = 0;
            while(nums[left] % 2 !== 1) {
                leftCnt ++;
                left++;
            }
            left++;
            ans += (rightCnt + 1) * (leftCnt + 1);
        }
    }
    return ans;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let prefixCnt = (new Array(nums.length + 1)).fill(0);
    let sum = 0, ans = 0;
    prefixCnt[0] = 1;
    for(let n of nums) {
        sum += n % 2;
        prefixCnt[sum]++;
        if(sum >= k) {
            ans += prefixCnt[sum - k];
        }
    }
    return ans;
};