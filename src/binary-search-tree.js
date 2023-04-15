const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root_value = null;
    this.arr_values = [];
  }

  root() {
    return this.root_value;
  }

  check(root, node) {
    let condition_left = (root.left && (node.data < root.data));
    let condition_right = (root.right && (node.data > root.data));
    let condition = (condition_left || condition_right)
    while(condition) {
      if ((node.data < root.data)) {
        if ((root.left === null)) {
          root.left = node;
          return;
        }else {
          root = root.left;
          continue;
        }
      }else if ((node.data > root.data)) {
        if ((root.right === null)) {
          root.right = node;
          return;
        }else {
          root = root.right;
          continue;
        }
      }else {
        return false;
      }
    }
  }

  add(data) {
    let new_node = new Node(data);
    let current_root = this.root_value;
    if (current_root === null) {
      this.root_value = new_node;
      this.arr_values.push(data);
      return;
    }else {
      if (new_node.data < current_root.data) {
        if (current_root.left === null) {
          current_root.left = new_node;
          this.arr_values.push(data);
          return;
        }else {
          this.check(current_root, new_node);
          this.arr_values.push(data);
          return;
        }
      }else if (new_node.data > current_root.data) {
        if (current_root.right === null) {
          current_root.right = new_node;
          this.arr_values.push(data);
          return;
        }else {
          this.check(current_root, new_node);
          this.arr_values.push(data);
          return;
        }
      }
    }
  }

  check_has(root, value) {
    let condition_left = (root.left && (value < root.data));
    let condition_right = (root.right && (value > root.data));
    let condition = (condition_left || condition_right)
    while(condition) {
      if ((value < root.data)) {
        if ((root.left === null)) {
          return null;
        }
        if ((root.left.data === value)) {
          return root.left;
        }else {
          root = root.left;
          continue;
        }
      }else if ((value > root.data)) {
        if ((root.right === null)) {
          return null;
        }
        if ((root.right.data === value)) {
          return root.right;
        }else {
          root = root.right;
          continue;
        }
      }else {
        return false;
      }
    }
  }

  has(value) {
    let current_root = this.root_value;
    if (current_root.data === value) {
      return true;
    }else {
      if (value < current_root.data) {
        if (current_root.left.data === value) {
          return true;
        }else {
          let res = this.check_has(current_root, value) ? true : false;
          return res;
        }
      }else if (value > current_root.data) {
        if (current_root.right.data === value) {
          return true;
        }else {
          let res = this.check_has(current_root, value) ? true : false;
          return res;
        }
      }
    }
  }

  find(value) {
    let current_root = this.root_value;
    if (current_root.data === value) {
      return current_root;
    }else {
      if (value < current_root.data) {
        if (current_root.left.data === value) {
          return current_root.left;
        }else {
          let res = this.check_has(current_root, value) ? this.check_has(current_root, value) : null;
          return res;
        }
      }else if (value > current_root.data) {
        if (current_root.right.data === value) {
          return current_root.right;
        }else {
          let res = this.check_has(current_root, value) ? this.check_has(current_root, value) : null;
          return res;
        }
      }
    }
  }

  check_remove(root, value) {
    // if (root.data > value) {
    //   root.left = this.check_remove(root.left, value);
    //   return root;
    // }else if (root.data < value) {
    //   root.right = this.check_remove(root.right, value);
    //   return root;
    // }else if (root.data === value) {
    //   if (root.left === null && root.right === null) {
    //     return null;
    //   }
    //   if (root.left && root.right === null) {
    //     return root.left;
    //   }else if (root.right && root.left === null) {
    //     return root.right;
    //   }
    //   if (root.left && root.right) {
    //     let current_root = root.right;
    //     while (current_root.left) {
    //       current_root = current_root.left;
    //     }
    //     root.data = current_root.data;
    //     if (current_root.left && current_root.right === null) {
    //       root.right = current_root.left;
    //       // current_root = current_root.right
    //       return root;
    //     }else if (current_root.right && current_root.left === null) {
    //       root.right = current_root.right;
    //       // current_root = current_root.right
    //       return root;
    //     }
    //   }

    // }
  }

  remove(value) {
    this.root_value = null;
    let new_arr = this.arr_values.filter(item => item != value);
    for (let i = 0; i < new_arr.length; i++) {
      this.add(new_arr[i]);
    }
    this.arr_values = new_arr;
    // let new_root;
    // let current_root = this.root_value;
    // if (!this.has(value)) {
    //   return;
    // }
    // if (current_root === null) {
    //   new_root = null;
    // }else {
    //   new_root = this.check_remove(current_root, value);
    // }
    // this.root_value = new_root;
  }

  min() {
    if (this.root_value === null) {
      return null
    }else if(this.root_value.left === null) {
      return this.root_value.data;
    }else {
      let current_root = this.root_value.left;
      while (current_root.left) {
        current_root = current_root.left;
      }
      return current_root.data;
    }
  }

  max() {
    if (this.root_value === null) {
      return null
    }else if(this.root_value.right === null) {
      return this.root_value.data;
    }else {
      let current_root = this.root_value.right;
      while (current_root.right) {
        current_root = current_root.right;
      }
      return current_root.data;
    }
  }
}

let tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);

tree.remove(14);
tree.remove(8);
tree.remove(9);
console.log(tree.has(14));
console.log(tree.has(8));
console.log(tree.has(9));
console.log(tree.has(2));
console.log(tree.has(6));
console.log(tree.has(128));
console.log(tree.has(31));
console.log(tree.has(54));
console.log(tree.has(1));

module.exports = {
  BinarySearchTree
};