/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let ans = -Infinity;
    let area = [];
    let len = height.length;
    for(let i = 0;i < len;i++) {
        let k = len - 1;
        while(height[k] < height[i] && k > i) k--;
        area[i] = k !== i ? height[i] * (k - i) : 0;
    }
    for(let i = len - 1; i >= 0;i--){
        let k = 0;
        while(height[k] < height[i] && k < i) k ++;
        area[i] = Math.max(k !== i ? height[i] * (i - k) : 0, area[i]);
        if(area[i] > ans) ans = area[i];
    }
    return ans;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0, r = height.length - 1;
  let ans = -Infinity;
  while(l < r) {
      ans = Math.max(height[l] < height[r] ?  (r - l) * height[l++] : (r - l) * height[r--] , ans);
  }
  return ans;
};