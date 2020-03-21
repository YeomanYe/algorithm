/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let ans = [];
    let solve = [];
    let len = candidates.length;
    let backtrack = function(i, t) {
        if(t === 0) {
            ans.push(solve.slice());
            return;
        }
        if(i >= len) return;
        let c = candidates[i];
        if(c > t) return;
        let num = parseInt(t / c);
        let arr = (new Array(num)).fill(c);
        solve.splice(solve.length, 0, ...arr);
        t = t % c;
        backtrack(i + 1, t);
        for(let j = 0;j < num;j++) {
            t += c;
            solve.pop();
            backtrack(i + 1, t);
        }
    };
    backtrack(0, target);
    return ans;
};
