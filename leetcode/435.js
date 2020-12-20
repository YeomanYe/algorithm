/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (!intervals.length) return 0;
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 1;
    let end = intervals[0][1];
    let len = intervals.length;
    for(let i = 1;i < len;i++) {
        let s = intervals[i];
        if (s[0] >= end) {
            count++;
            end = s[1];
        }
    }
    return len - count;
};