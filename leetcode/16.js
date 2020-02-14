/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let len = nums.length;
    let minDelta = Infinity;
    let ans;
    for(let i = 0;i < len;i++){
        for(let j = i + 1;j < len;j++) {
            for(let k = j + 1;k < len;k++) {
                let res = nums[i] + nums[j] + nums[k];
                let d = Math.abs(target - res);
                if(d === 0) {
                    return target;
                } else if(d < minDelta) {
                    minDelta = d;
                    ans = res;
                }
            }
        }
    }
    return ans;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let ans = Infinity;
  nums.sort((a, b) => a - b);
  for(let i = 0;i < nums.length;i++){
      let s = i + 1, e = nums.length - 1;
      while(s < e) {
          let res = nums[s] + nums[i] + nums[e];
          let d = target - res;
          if(Math.abs(d) < Math.abs(target - ans)) {
              ans = res;
          }
          if(d > 0) {
              s++;
          } else if(d < 0) {
              e--;
          } else {
              return ans;
          }
      }
  }
  return ans;
};