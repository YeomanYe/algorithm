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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let len = nums.length;
    let ans = [];
    nums.sort((a,b) => a - b);
    for(let i = 0;i < len - 3;i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        let min = nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3];
        // 最小值比最大值大，则结束
        if(min > target) break;
        for(let j = i + 1;j < len - 2; j++) {
            if(j > i + 1 && nums[j] === nums[j - 1]) continue;
            let l = j + 1;
            let r = len - 1;
            while(l < r) {
                let d = nums[i] + nums[j] + nums[l] + nums[r];
                if(d < target) {
                    l++;
                } else if(d > target) {
                    r--;
                } else {
                    ans.push([nums[i], nums[j], nums[l], nums[r]]);
                    while(l < r && nums[l] === nums[l + 1]) l++;
                    l++;
                    while(l < r && nums[r] === nums[r - 1]) r--;
                    r--;
                }
            }
        }
    }
    return ans;
};