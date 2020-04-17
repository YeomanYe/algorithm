/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let ans = (new Array(k)).fill(Infinity);
    for(let n of nums) {
        let c = map.get(n) || 0;
        c++;
        map.set(n, c);
    }
    let min = -1;
    for(let [key,val] of map.entries()) {
        let index = -1;
        if(val < min) continue;
        for(let i = 0;i < k;i++) {
            let c = map.get(ans[i]) || 0;
            if(val > c) {
                index = i;
                break;
            }
        }
        ans.splice(index, 0, key);
        ans.pop();
        let k1 = ans[ans.length - 1];
        min = map.get(k1) || 0;
    }
    return ans;
};