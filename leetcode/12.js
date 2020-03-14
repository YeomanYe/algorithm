/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const one = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const ten = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const hundred = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const thousand = ['M', 'MM', 'MMM'];
    let ans = '';
    let r = 1000;
    while(num) {
        let count = parseInt(num / r);
        num = num % r;
        r = parseInt(r / 10);
        if(count) {
            let arr;
            switch (r) {
                case 100: arr = thousand;break;
                case 10: arr = hundred;break;
                case 1: arr = ten;break;
                case 0: arr = one;break;
            }
            ans += arr[count - 1];
        }
    }
    return ans;
};