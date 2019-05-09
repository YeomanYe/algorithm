import {repareUniqueArr, tempSearchTest} from "../test.util";
import {bsearch} from "../../search/logn";

let datas = [[]];
repareUniqueArr(datas);

describe('logn', () => {
  test('bsearch', () => {
    tempSearchTest(bsearch,datas);
  })
});
