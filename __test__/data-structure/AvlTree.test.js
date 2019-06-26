import cloneDeep from 'lodash.clonedeep';
import AvlTree from "../../data-structure/AvlTree";

let datas = [5, 0, 2, 4, 3, 6, 1, 7, 9, 8];
describe('AvlTree', () => {
  test('insert', () => {
    let d = cloneDeep(datas);
    let bst = new AvlTree(d);
    bst.insert(10);
    d.push(10);
    d.sort((a, b) => a - b);
    let arr = [];
    //中序遍历获得从小到大的排序
    bst.inOrder(d => arr.push(d.data));
    // console.log(arr);
    expect(arr).toEqual(d);
  });
  test('find',()=>{
    let d = cloneDeep(datas);
    let bst = new AvlTree(d);
    let p;
    p = bst.find(5);
    expect(p.data).toEqual(5);
    p = bst.find(0);
    expect(p.data).toEqual(0);
    p = bst.find(9);
    expect(p.data).toEqual(9);
    p = bst.find(10);
    expect(p).toEqual(null);
  });
});
