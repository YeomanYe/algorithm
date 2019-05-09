import SkipList from "../../data structure/SkipList";
import cloneDeep from 'lodash.clonedeep';

let datas = [5,0,2,4,3,6,1,7,9,8];
describe('SkipList',()=>{
  test('insert',()=>{
    let skipList = new SkipList(datas);
    let list = skipList.getStruct();
    expect(list[list.length - 1]).toEqual(datas.sort((a,b) => a - b));
    skipList.insert(10);
    list = skipList.getStruct();
    datas.push(10);
    expect(list[list.length - 1]).toEqual(datas.sort((a,b) => a - b));
  });
  test('find',()=>{
    let skepList = new SkipList(datas);
    let node;
    node = skepList.find(5);
    // console.log(node);
    expect(node.data).toEqual(5);
    node = skepList.find(0);
    expect(node.data).toEqual(0);
    node = skepList.find(9);
    expect(node.data).toEqual(9);
  });
  test('remove',()=>{
    let skepList = new SkipList(datas);
    skepList.printStruct();
    // let node = skepList.find(5);
    // console.log(node);
    console.log('remove');
    skepList.remove(5);
    skepList.printStruct();
    let d = skepList.getStruct();
    let s = cloneDeep(datas.sort((a,b) => a - b));
    // datas = datas.sort((a,b) => a - b);
    s.splice(5,1);
    expect(d[d.length - 1]).toEqual(s);
  });
});
