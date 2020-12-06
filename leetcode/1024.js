/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
    if (!clips.length) return -1;
    let ans = 0;
    clips.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]);
    let temp = [];
    temp[clips[0][0]] = clips[0];
    for(let i = 1, len = clips.length;i < len;i++) {
        let t = temp[temp.length - 1];
        let c = clips[i];
        if (t[0] === c[0]) continue;
        temp[c[0]] = c;
    }
    if (!temp[0]) return -1;
    let [last, cur] = temp[0];
    let next = cur;
    let orgCur = cur;
    ans++;
    while(cur > last) {
        if (cur >= T) {
            break;
        }
        const [i, val] = temp[cur] || [-1, -1];
        next = Math.max(next, val);
        cur--;
        if (cur === last) {
            if (orgCur !== next) {
                last = orgCur;
                orgCur = next;
                cur = next;
            }
            ans ++;
        }
    }
    return cur !== last ? ans : -1;
};