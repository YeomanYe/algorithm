/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let ans = [];
    let stack = [];
    for(let i = 0, len = T.length;i < len;i++) {
        let t = T[i];
        while(stack.length) {
            let j = stack[stack.length - 1];
            if(T[j] >= t) break;
            ans[j] = i - j;
            stack.pop();
        }
        stack.push(i);
    }
    for(let i of stack) {
        ans[i] = 0;
    }
    return ans;
};