import {insertSort, selectSort, shellSort} from "../../sorts/n^2";
import {randInt, tempTest} from "./util";

let datas = [[]];
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

describe('n^2',()=>{
  test('select',()=>{
    tempTest(selectSort,datas);
  });
  test('insert',()=>{
    tempTest(insertSort,datas);
  });
  test('shell',()=>{
    tempTest(shellSort,datas);
  });
});
