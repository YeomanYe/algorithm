/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let TreeNode = function (d) {
        this.data = d;
        this.cnt = 1; //节点相同元素的数目
        this.rChild = 0; //右节点数量，用于判断逆序对
        this.left = this.right = null;
    };
    let SearchTree = function () {
        this._root = null;
        this.insert = function (num) {
            if(!this._root) {
                this._root = new TreeNode(num);
                return 0;
            }
            let p = this._root;
            let lastNode;
            let path = 0;
            while(p) {
                lastNode = p;
                if(p.data > num) {
                    path += p.cnt + p.rChild;
                    p = p.left;
                } else if(p.data < num) {
                    p.rChild ++;
                    p = p.right;
                } else {
                    path += p.rChild;
                    p.cnt ++;
                    break;
                }
            }
            if(lastNode.data > num) {
                lastNode.left = new TreeNode(num);
            } else if(lastNode.data < num) {
                lastNode.right = new TreeNode(num);
            }
            return path;
        }
    };
    let searchTree = new SearchTree();
    let ans = 0;
    for(let i = 0;i < nums.length;i++) {
        ans += searchTree.insert(nums[i]);
    }
    return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let ans = 0;
    if(nums.length <= 1) return ans;
  let mergeSort = function (l,h) {
      if(l >= h) return;
      let m = (h + l) >> 1;
      mergeSort(l, m);
      mergeSort(m + 1, h);
      merge(l, m, h);
  };
  let help = [];
  let merge = function (low, mid, high) {
      let index = 0;
      let l = low, r = mid + 1;
      while(l <= mid && r <= high) {
          if(nums[l] <= nums[r]) {
              help[index++] = nums[l++];
          } else {
              help[index++] = nums[r++];
              ans += (mid - l + 1);
          }
      }
      while(l <= mid) {
          help[index++] = nums[l++];
      }
      while(r <= high) {
          help[index++] = nums[r++];
      }
      for(let i = low;i <= high;i++) {
          nums[i] = help[i - low];
      }
  };
  mergeSort(0, nums.length - 1);
  return ans;
};