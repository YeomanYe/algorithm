/**
 * 选择排序
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
export function selectSort(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    let b = Number.MAX_VALUE,
        index = i; //最值和对应的索引
    for (let j = i; j < len; j++) {
      if (arr[j] < b) {
        b = arr[j];
        index = j;
      }
    }
    let tmp = arr[i];
    arr[i] = b;
    arr[index] = tmp;
  }
  return arr;
}
/**
 * 插入排序
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
export function insertSort(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
    }
  }
  return arr;
}
/**
 * 希尔排序
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
export function shellSort(arr){
  let len = arr.length,
      gap = Math.floor(len/2);
  if(gap < 1) return;
  while(gap >= 1){
    let i = 0;
    do{
      let index = i;
      while(index + gap<len){
        if(arr[index] > arr[index+gap]){
          let tmp = arr[index];
          arr[index] = arr[index+gap];
          arr[index+gap] = tmp;
          index = index - gap >= 0 ? index - gap : index;
        }else index+=gap;
      }
    }while(++i<gap);
    gap = Math.floor(gap/2);
  }
  return arr;
}
