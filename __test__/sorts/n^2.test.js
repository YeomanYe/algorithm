import {insertSort, selectSort, shellSort} from "../../sorts/n^2";
import {randInt, repareDatas, tempTest} from "../test.util";

let datas = [[]];
repareDatas(datas);

describe('n^2',()=>{
  test('selectSort',()=>{
    tempTest(selectSort,datas);
  });
  test('insertSort',()=>{
    tempTest(insertSort,datas);
  });
  test('shellSort',()=>{
    tempTest(shellSort,datas);
  });
});
