const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require("../extensions/list-tree.js");
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }
  add(data) {
    let node = new Node(data);
    if (!this._root) this._root = node;
    else {
      let current = this._root;
      while (!!current) {
        if (node.data < current.data) {
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        } else if (node.data > current.data) {
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        } else {
          break;
        }
      }
    }
    return this;
  }
  has(data) {
    if (!this._root) return false;
    let current = this._root;
    let found = false;
    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = current;
      }
    }

    if (!found) return false;
    return true;
  }
  find(data) {
    if (!this._root) return null;
    let current = this._root;
    let found = false;
    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = current;
      }
    }
    if (!found) return null;
    return found;
  }

  remove(data) {
    this._root = this.deleteRecursive(this._root, data);
  }

  deleteRecursive(root, data) {
    if (root == null) {
      return root;
    }
    if (data < root.data) {
      root.left = this.deleteRecursive(root.left, data);
    } else if (data > root.data) {
      root.right = this.deleteRecursive(root.right, data);
    } else {
      if (root.left == null) {
        return root.right;
      } else if (root.right == null) {
        return root.left;
      }
      root.data = this.min(root.right);
      root.right = this.deleteRecursive(root.right, root.data);
    }
    return root;
  }

  min() {
    let current = this._root;
    while (current.left != null) {
      current = current.left;
    }
    return current.data || null;
    // remove line with error and write your code here
  }

  max() {
    let current = this._root;
    while (current.right != null) {
      current = current.right;
    }
    return current.data || null;
  }
}

module.exports = {
  BinarySearchTree,
};
