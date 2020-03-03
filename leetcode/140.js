/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let ans = [];
    let Trie = function() {
        this.data = new Array(26);
        this.isEnd = false;
        this.insert = function (c) {
            return this.data[c.charCodeAt(0) - 97] = this.data[c.charCodeAt(0) - 97] || new Trie();
        };
        this.get = function (c) {
            return this.data[c.charCodeAt(0) - 97];
        };
    };
    let root = new Trie();
    for(let w of wordDict) {
        let p = root;
        for(let i = 0;i < w.length;i++) {
            p = p.insert(w[i]);
        }
        p.isEnd = true;
    }
    let temp = [];
    let dfs = function(i) {
        if(i === 0) {
            ans.push(temp.join(' '));
            return;
        }
        for(let d of dp[i]) {
            temp.unshift(s.substring(d, i));
            dfs(d);
            temp.shift();
        }
    };
    let n = s.length;
    let dp = Array.from(new Array(n + 1), () => (new Array()));
    dp[0][0] = 0;
    for(let i = 0;i < n;i++) {
        if(!dp[i].length) continue;
        let j = i;
        let p = root;
        while(j < n && p) {
            p = p.get(s[j++]);
            if(p && p.isEnd) {
                dp[j].push(i);
            }
        }
    }
    dfs(n);
    return ans;
};