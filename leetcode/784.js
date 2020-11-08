/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    let str = S.split('');
    let len = S.length;
    let result = [''];
    for (let i = 0;i < len;i++) {
        let c = str[i];
        let n = c.charCodeAt(0);
        if ((n > 64 && n < 91) || (n > 96 && n < 123)) {
            for(let j = 0;j < result.length;j+=2) {
                result.splice(j, 0, result[j]);
                result[j] += c.toLowerCase();
                result[j + 1] += c.toUpperCase();
            }
        } else {
            for(let t in result) {
                result[t] += c;
            }
        }
    }
    return result;
};