/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (!points.length) return 0;
    points.sort((a, b) => a[0] - b[0]);
    let temp = [points[0]];
    for(let i = 1, len = points.length;i < len;i++) {
        let t = temp[temp.length - 1];
        let p = points[i];
        if (t[1] < p[0]) {
            temp.push(p);
        } else {
            temp.pop();
            temp.push([p[0], Math.min(t[1], p[1])]);
        }
    }
    return temp.length;
};