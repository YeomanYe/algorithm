/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let ans = [];
    let temp = [];
    let len = candidates.length;
    let backtrack = function (i, t) {
        if(t === 0) {
            ans.push(temp.slice());
            return;
        }
        let oi = i;
        while(i < len) {
            let c = candidates[i];
            if(i > oi && candidates[i - 1] === c){
                i++;
                continue;
            }
            if(t < c) {
                break;
            }
            temp.push(c);
            backtrack(++i, t - c);
            temp.pop();
        }
    };
    backtrack(0, target);
    return ans;
};