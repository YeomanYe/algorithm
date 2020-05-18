/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let nums = [];
    let chars = [];
    let cur = '';
    let ans = '';
    for(let c of s) {
        if(c === '[') {
            nums.push(cur);
            cur = '';
            continue;
        } else if(/\d/.test(c) && !/\d/.test(cur)) {
            chars.push(cur);
            cur = c;
            continue;
        } else if(c === ']') {
            let nStr = nums.pop();
            let cStr = chars.pop() || '';
            let n = parseInt(nStr);
            while(n) {
                cStr += cur;
                n--;
            }
            cur = cStr;
            if(nums.length === 0) {
                ans += cur;
                cur = '';
            }
            continue;
        }
        cur += c;
    }
    ans += cur;
    return ans;
};