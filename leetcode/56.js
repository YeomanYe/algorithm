/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(!intervals.length) return [];
    intervals.sort((a,b) => a[0] - b[0]);
    let result = [intervals[0]];
    for(let i = 1;i < intervals.length;i++){
        let len = result.length - 1;
        if(result[len][1] >= intervals[i][0]){
            if(result[len][1] < intervals[i][1]) {
                result[len][1] = intervals[i][1];
            }
        }else {
            result.push(intervals[i]);
        }
    }
    return result;
};