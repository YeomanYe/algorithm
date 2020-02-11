/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    function calLen(n) {
        if(map.get(n)){
            map.set(n, false);
            return (1 + calLen(n - 1) + calLen(n + 1));
        }
        return 0;
    }
    let map = new Map();
    let ans = 0;
    for(let n of nums) {
        map.set(n, true);
    }
    for(let n of nums) {
        ans = Math.max(calLen(n), ans);
    }
    return ans;
};