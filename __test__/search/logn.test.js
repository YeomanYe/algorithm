import {repareUniqueArr, tempSearchTest} from "../test.util";
import {bsearch, slsearch} from "../../search/logn";

let datas = [[]];
repareUniqueArr(datas);

describe('logn', () => {
  test('bsearch', () => {
    tempSearchTest(bsearch,datas);
  });
  test('slsearch',()=>{
    tempSearchTest(slsearch,datas,true);
  });
});
