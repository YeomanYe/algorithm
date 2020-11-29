/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
    let temp = [];
    class Heap {
        constructor(arr) {
            this.arr = arr;
            this.init();
        }
        init() {
            let arr = this.arr;
            let len = arr.length;
            for (let i = len >> 1;i >= 0;i--) {
                this.heapify(i, len);
            }
        }
        compare(p0, p1) {
            const [x0, y0] = p0;
            const [x1, y1] = p1;
            return x0 * x0 + y0 * y0 - x1 * x1 - y1 * y1 > 0;
        }
        heapify(i = 0, len = this.arr.length) {
            let arr = this.arr;
            for(let k = 2*i+1;k<len;k=2*k+1) {
                let temp = arr[i];
                if (k + 1 < len && this.compare(arr[k+1], arr[k])) {
                    k++
                }
                if(this.compare(arr[k], arr[i])) {
                    arr[i] = arr[k];
                    i = k;
                    arr[k] = temp;
                } else {
                    break;
                }
            }
        }
        getTop() {
            return this.arr[0];
        }
        addTop(p) {
            this.arr[0] = p;
            this.heapify(0, this.arr.length);
        }
    }
    for(let i = 0;i < K;i++) {
        temp.push(points[i]);
    }
    const heap = new Heap(temp);
    for(let i = K, len = points.length;i < len;i++) {
        let p = points[i];
        let h = heap.getTop();
        if ((h[0] * h[0] + h[1] * h[1]) > (p[0] * p[0] + p[1] * p[1])) {
            heap.addTop(p);
        }
    }
    return heap.arr;
};