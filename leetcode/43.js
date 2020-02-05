/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') return '0';
    let res = [];
    let len1 = num1.length;
    let len2 = num2.length;
    for(let i = 0;i < len1 + len2;i++) {
        res[i] = 0;
    }
    for(let i = len1 - 1; i >= 0;i--){
        for(let j = len2 - 1;j >= 0;j--){
            let n1 = parseInt(num1[i]);
            let n2 = parseInt(num2[j]);
            let sum = res[i + j + 1] + n1 * n2;
            res[i + j] += parseInt(sum / 10);
            res[i + j + 1] = sum % 10
        }
    }
    if(res[0] === 0) res.shift();
    return res.join('');
};