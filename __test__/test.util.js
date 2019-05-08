import clonedeep from "lodash.clonedeep";

export function tempTest(sort,datas) {
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
 * 生成随机整型值
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
export function repareDatas(datas) {
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
