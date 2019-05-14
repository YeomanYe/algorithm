import clonedeep from "lodash.clonedeep";

export function tempSortTest(sort, datas) {
  let d = clonedeep(datas);
  for(let i=0,len=datas.length;i<len;i++){
    let arr = d[i];
    let cArr = clonedeep(arr);
    cArr.sort((a,b) => a-b);
    // console.log('origin',arr);
    sort(arr);
    // console.log('result',arr);
    expect(arr).toEqual(cArr);
  }
}

/**
 * 生成随机整型值,左闭有开
 * @param h
 * @param l
 * @returns {number}
 */
export function randInt(h,l = 0){
  return l + parseInt(( h - l )* Math.random());
}

/**
 * 预备数据
 */
export function repareArr(datas) {
  beforeAll(()=>{
    let n = 5;
    while(n-->0){
      let arr = [];
      for(let len=Math.pow(10,n),i=0;i<len;i++){
        arr.push(randInt(len));
      }
      datas.push(arr);
    }
  });
}

/**
 * 预备不重复的数组数据
 * @param datas
 */
export function repareUniqueArr(datas) {
  beforeAll(()=>{
    let n = 5;
    while(n-->0){
      let set = new Set();
      for(let len=Math.pow(10,n),i=0;i<len;i++){
        set.add(randInt(len));
      }
      datas.push([...set]);
    }
  });
}

/**
 * 排序测试模板
 * @param search
 * @param datas
 * @param isVal 比较的是值还是序列号
 */
export function tempSearchTest(search,datas,isVal = false) {
  datas.forEach((arr) => {
    arr.sort((a,b) => a - b);
    let i = randInt(arr.length);
    let index = search(arr,arr[i]);
    if(isVal){
      let val = arr.length === 0 ? null : arr[i];
      expect(index).toEqual(val);
    }else{
      i = arr.length === 0 ? -1 : i;
      expect(index).toEqual(i);
    }
  })
}
