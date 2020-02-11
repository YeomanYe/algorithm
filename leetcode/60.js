/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let str = [1,2,3,4,5,6,7,8,9];
    let divisor = [1];
    let i = 1;
    while(i < n) {
        divisor[i] = i * divisor[i - 1];
        i++;
    }
    let ans = '';
    for(let i = 0;i < n;i++){
        let index = Math.floor((k - 1) / divisor[n - 1 - i]) ;
        k = k - index * divisor[n - 1 - i];
        ans += str[index];
        str.splice(index, 1);
    }
    return ans;
};