import BinarySearchTree from "./BinarySearchTree";

export default class AvlTree extends BinarySearchTree{
  rotateLL(node){
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }
  rotateRR(node){
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }
  rotateLR(node){
    node.left = this.rotateRR(node.left);
    return this.rotateLL(node);
  }
  rotateRL(node){
    node.right = this.rotateLL(node.right);
    return this.rotateRR(node);
  }
}
