/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let set = new Set();
    let temp = [];
    let ans = [];
    let len = nums.length;
    nums.sort((a,b) => a - b);
    let backtrack = function() {
        if(temp.length === len) {
            ans.push(temp.slice());
            return;
        }
        let last = null;
        for(let i = 0;i < len;i++) {
            let n = nums[i];
            if(set.has(i) || n === last) continue;
            last = n;
            temp.push(n);
            set.add(i);
            backtrack();
            set.delete(i);
            temp.pop();
        }
    };
    backtrack();
    return ans;
};