/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let ans = [];
    let TreeNode = function() {
        this.data = new Array(26);
        this.isEnd = false;
        this.insert = function (c) {
            return this.data[c.charCodeAt(0) - 97] = this.data[c.charCodeAt(0) - 97] || new TreeNode();
        };
        this.get = function (c) {
            return this.data[c.charCodeAt(0) - 97];
        };
    };
    let root = new TreeNode();
    let wordSet = new Set();
    for(let w of wordDict) {
        let p = root;
        for(let i = 0;i < w.length;i++) {
            p = p.insert(w[i]);
            // 用于字符是否在其中
            wordSet.add(w[i]);
        }
        p.isEnd = true;
    }
    let temp = [];
    let finish = false;
    let backtrack = function (i) {
        if(i === s.length) {
            ans.push(temp.join(' '));
            return;
        }
        if(!wordSet.has(s[i])) {
            finish = true;
            return;
        }
        let p = root;
        for(let j = i;j < s.length;j++) {
            let e = p.get(s[j]);
            if(e && e.isEnd) {
                temp.push(s.substring(i, j + 1));
                backtrack(j + 1);
                if(finish) return;;
                temp.pop();
            } else if(!e) {
                return;
            }
            p = e;
        }
    };
    backtrack(0);
    return ans;
};