/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let queue = [];
    let sum = 0;
    let min = Infinity;
    for(let n of nums) {
        sum += n;
        queue.push(n);
        while(sum >= s && queue.length > 0) {
            min = Math.min(queue.length, min);
            sum -= queue.shift();
        }
    }
    return min === Infinity ? 0 : min;
};