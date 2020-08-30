/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    let isPalindromic = (prev, last) => {
        while(last >= prev) {
            if (s[last] !== s[prev]) {
                return false;
            }
            last--;
            prev++;
        }
        return true;
    };
    let step = s.length - 1;
    while(step > 0) {
        let index = 0;
        while(index + step < s.length) {
            if(isPalindromic(index, index + step)) {
                count++;
            }
            index++;
        }
        step--;
    }
    return count + s.length;
};