/**
 * 使用邻接矩阵表示法的图
 */
export default class AdjMatrixGraph {
  adjMat;
  constructor(size){
    this.adjMat = new Array(size);
    let len = this.adjMat.length;
    while(len--){
      this.adjMat[len] = new Array(size);
    }
  }
  insert(i,j){
    this.adjMat[i][j] = 1;
    this.adjMat[j][i] = 1;
  }
  insertAll(arr){
    arr.forEach(([i,j])=>this.insert(i,j));
  }
  bft(func){
    let arr = this.adjMat,
        len = arr.length;
    let queue = []; //用于保证顺序的队列
    let i = 0,si = 0,ci=0;
    while(queue.length !== len){
      //当等于的时候，从头开始进行搜索
      if(si !== queue.length){
        i = queue[si++];
      }else{
        for(i = 0;i<len;i++){
          if(queue.indexOf(i) < 0) {
            queue.push(i);
            break;
          }
        }
      }
      for(let j=0;j<len;j++){
        if(arr[i][j] && queue.indexOf(j) < 0){
          queue.push(j);
        }
      }
      for(;ci<queue.length;ci++){
        func(queue[ci]);
      }
    }
  }
  dft(func){
    let arr = this.adjMat,
        len = arr.length;
    let filterObj = {}, filterIndexs = [];
    let search = (i) => {
      func(i);
      for(let j=0;j<len;filterIndexs.push(i),j++){
        if(!filterObj[i+'-'+j] && !filterObj[j+'-'+i] && arr[i][j]){
          filterObj[i+'-'+j] = true;
          search(j);
        }
      }
    };
    for(let i = 0;i<len;filterIndexs.push(i),i++){
      //为了避免重复搜索相同的节点
      if(filterIndexs.indexOf(i)>=0)continue;
      search(i);
    }
  }
}
