/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let isPalindrome = function (s, b, e) {
      while (b < e) {
          if(s[b] !== s[e]) return false;
          b++;
          e--;
      }
      return true;
    };
    let max = 0;
    let ans = '';
    for(let i = 0;i < s.length;i++) {
        for(let j = i;j < s.length;j++) {
            if(j - i + 1 > max && isPalindrome(s, i, j)){
                max = j - i + 1;
                ans = s.substring(i, j + 1);
            }
        }
    }
    return ans;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let dp = [];
    let max = 0;
    let end = 0;
    for(let i = s.length - 1;i >= 0;i--) {
        for(let j = s.length - 1;j >= i;j--) {
            dp[j] = s[i] === s[j] && (j - i < 2 || dp[j - 1]);
            if(dp[j] && j - i > max) {
                max = j - i;
                end = j;
            }
        }
    }
    return s.substring(end - max, end + 1);
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let expandAroundCenter = function (s, l, r) {
      while(l >= 0 && r < s.length && s[l] === s[r]){
          l--;
          r++;
      }
      return r - l - 1;
  };
  let max = 0;
  let start = 0;
  for(let i = 0;i < s.length - 1;i ++) {
      let len1 = expandAroundCenter(s, i, i);
      let len2 = expandAroundCenter(s, i, i + 1);
      if(len1 > max || len2 > max) {
          max = Math.max(len1, len2);
          start = i - parseInt((max - 1) / 2);
      }
  }
  return s.substring(start, start + max);
};