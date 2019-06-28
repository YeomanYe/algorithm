export default class AdjListGraph {
  adjList;

  constructor(size) {
    this.adjList = new Array(size);
    while (size--) {
      this.adjList[size] = new Array(0);
    }
  }

  insert(i, j) {
    if (this.adjList[i].indexOf(j) < 0) {
      this.adjList[i].push(j);
      this.adjList[j].push(i);
    }
  }

  insertAll(arr) {
    arr.forEach(([i, j]) => this.insert(i, j));
  }

  bft(func) {
    let arr = this.adjList,
        len = arr.length;
    let queue = []; //用于保证顺序的队列
    let i = 0, si = 0, ci = 0;
    while (queue.length !== len) {
      //当等于的时候，从头开始进行搜索
      if (si !== queue.length) {
        i = queue[si++];
      } else {
        for (i = 0; i < len; i++) {
          if (queue.indexOf(i) < 0) {
            queue.push(i);
            break;
          }
        }
      }
      for (let j = 0, len = arr[i].length; j < len; j++) {
        if (queue.indexOf(arr[i][j]) < 0) {
          queue.push(arr[i][j]);
        }
      }
      for (; ci < queue.length; ci++) {
        func(queue[ci]);
      }
    }
  }

  dft(func) {
    let arr = this.adjList,
        len = arr.length;
    let vIndex = [], //访问过的节点
        sIndex = []; //搜索过的节点
    let search = (i) => {
      func(i);
      vIndex.push(i);
      for (let j = 0, len = arr[i].length; j < len; sIndex.push(i), j++) {
        let k = arr[i][j];
        if (vIndex.indexOf(k)<0) {
          search(k);
        }
      }
    };
    for (let i = 0; i < len; sIndex.push(i), i++) {
      //为了避免重复搜索相同的节点
      if (sIndex.indexOf(i) >= 0) continue;
      search(i);
    }
  }
}
