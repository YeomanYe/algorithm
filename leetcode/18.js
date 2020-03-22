/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let len = nums.length;
    let set = new Set();
    let bSearch = function(s, t) {
        let e = nums.length - 1;
        while(s <= e) {
            let mid = (s + e) >> 1;
            if(nums[mid] > t) {
                e = mid - 1;
            } else if(nums[mid] < t) {
                s = mid + 1
            } else {
                return mid;
            }
        }
        return -1;
    };
    nums.sort((a, b) => a - b);
    let ans = [];
    for(let i = 0;i < len - 3;i++) {
        for(let j = i + 1; j < len - 2;j++) {
            for(let k = j + 1;k < len - 1;k++) {
                let key = nums[i]+'@'+nums[j]+'@'+nums[k];
                if(set.has(key)) continue;
                let d = target - (nums[i] + nums[j] + nums[k]);
                if(d > nums[len - 1]) continue;
                let l = bSearch(k + 1, d);
                if(l >= 0) {
                    ans.push([nums[i], nums[j], nums[k], nums[l]]);
                    set.add(nums[i]+'@'+nums[j]+'@'+nums[l]);
                }
                set.add(key);
            }
        }
    }
    return ans;
};