/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result = [];
    let temp = [];
    let calAddr = function (b, e, count) {
        let sub = s.substring(b,e);
        if(sub.length > 1 && sub[0] === '0') return;
        let num = parseInt(sub);
        if(num < 0 || num > 255) return;
        else temp.push(num);
        if(count === 4) {
            if(s.length === e) {
                result.push(temp.join('.'));
            }
            temp.pop();
            return;
        }
        calAddr(e, e + 1, count + 1);
        calAddr(e, e + 2, count + 1);
        calAddr(e, e + 3, count + 1);
        temp.pop();
    };
    calAddr(0, 1, 1);
    calAddr(0, 2, 1);
    calAddr(0, 3, 1);
    return result;
};