import swap from "../util";
/**
 * 快速排序
 * @param  {[type]} arr [description]
 * @param  {Number} i   [description]
 * @param  {[type]} j   [description]
 * @return {[type]}     [description]
 */

export function quickSort(arr, i = 0, j = arr.length - 1) {
  let pivot = arr[j],
      index = j,
      k = j;
  if (i >= j) return;
  while (j > i) {
    if (arr[--j] > pivot) {
      let tmp = arr[j];
      for (let i = j; i < index; i++) {
        arr[i] = arr[i + 1];
      }
      arr[index] = tmp;
      index--;
    }
  }
  quickSort(arr, i, index - 1);
  quickSort(arr, index + 1, k);
  return arr;
}

/**
 * 归并排序
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
export function mergeSort(arr) {
  function merge(arr, arr1, arr2) {
    let len = arr1.length + arr2.length;
    let i = 0,
        j = 0,
        index = 0;
    arr1.push(Number.MAX_VALUE);
    arr2.push(Number.MAX_VALUE);
    while (len-- > 0) {
      if (arr1[i] > arr2[j]) {
        arr[index++] = arr2[j++];
      } else {
        arr[index++] = arr1[i++];
      }
    }
    return arr;
  }
  let len = arr.length;
  if (len <= 1) return;
  let count = Math.ceil(len / 2);
  let arr1 = new Array(count),
      arr2 = new Array(len - count);
  for (let k = 0; k < count; k++) {
    arr1[k] = arr[k];
  }
  for (let k = 0, len = arr2.length; k < len; k++) {
    arr2[k] = arr[count + k];
  }
  mergeSort(arr1);
  mergeSort(arr2);
  merge(arr, arr1, arr2);
  return arr;
}

/**
 * 堆排序
 * @param arr
 * @returns {*}
 */
export function heapSort(arr) {
  //从0开始
  class Heap {
    arr; //数组
    constructor(arr){
      this.arr = arr;
      // console.log(arr);
    }
    //建堆
    buildHeap(){
      let arr = this.arr,
          len = arr.length;
      //从倒数第二个节点开始进行堆化
      for(let i=Math.ceil((len - 3) / 2);i >= 0;i--){
        this.heapify(i,len);
      }
    }


    heapify(i, len) {
      let arr = this.arr;
      while (i * 2 + 1 < len || i * 2 + 2 < len) {
        let maxPos = i;
        // 如果index i拥有叶左节点 并且左节点较大
        if (i * 2 + 1 < len && arr[i] < arr[i * 2 + 1]) {
          maxPos = i * 2 + 1
        }
        // 如果index i拥有叶右节点 与Max节点比较大小，选出父/左/右中最大的一个
        if (i * 2 + 2 < len && arr[maxPos] < arr[i * 2 + 2]) {
          maxPos = i * 2 + 2
        }
        if(maxPos === i) break;
        swap(arr, i, maxPos); // 交换位置, 父节点为父/左/右中最大的一个
        i = maxPos // i为左/右节点，并尝试向下查找更大的值
      }
    }

    sort(){
      this.buildHeap();
      let index = this.arr.length - 1;
      while(index > 0){
        swap(this.arr,0,index);
        --index;
        this.heapify(0,index + 1);
      }
    }
  }
  new Heap(arr).sort();
  return arr;
}
