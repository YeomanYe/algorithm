/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = (beginWord, endWord, wordList) => {
    /**
     * @name 判断两个字符串是否可以相连
     * @param {string} word1 字符串 1
     * @param {string} word2 字符串 2
     * @return {boolean} true 表示可以，false 表示不行
     */
    const match = (word1, word2) => {
        // 1. 设置次数
        let time = 0;

        // 2. 遍历，如果不相同，次数 + 1，如果超过 1 次，中止循环
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i] && !time) {
                time++;
            } else if (word1[i] !== word2[i] && time) {
                time++;
                break;
            }
        }

        // 3. 返回是否可以相连
        return time === 1;
    };
    const map = {};

    for (let i = 0; i < wordList.length; i++) {

        // 2.1 获取字符串 1
        const word1 = wordList[i];

        // 2.2 再遍历一次数组
        for (let j = 0; j < wordList.length; j++) {

            // 2.3 相同位置不能构成表
            if (i === j) {
                continue;
            }

            // 2.4 获取字符串 2
            const word2 = wordList[j];

            // 2.5 建立映射
            if (match(word1, word2)) {
                if (!map[word1]) {
                    map[word1] = [];
                }
                map[word1].push(word2);
            }
        }

        // 2.6 记住 beginWord 也要建表
        if (match(word1, beginWord)) {
            if (!map[beginWord]) {
                map[beginWord] = [];
            }
            map[beginWord].push(word1);
        }
    }

    let now = [beginWord];

    const set = new Set();

    let time = 0;

    while (now.length) {
        time++;

        const next = [];

        for (let i = 0; i < now.length; i++) {
            const neighbor = map[now[i]] || [];
            for (let j = 0; j < neighbor.length; j++) {
                if (neighbor[j] === endWord) {
                    return time + 1;
                }
                if (!set.has(neighbor[j])) {
                    set.add(neighbor[j]);
                    next.push(neighbor[j]);
                }
            }
        }

        now = next;
    }

    return 0;
};