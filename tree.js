/* 
a node in a tree looks like,
 - eg of a binary tree having left and right (can be of any tertiary, quaternary)
{
    value: 4,
    right: null;
    left: null
}

Some terms 
 - Full: every node either points to 2 (or more) nodes or nulls;
 - Perfect: Every line is completely filled all the way across.
 - Complete: A binary tree which has all levels completely filled - Except last level. Last level must be filled from left to right
*/

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // create a new node
    const newNode = new Node(value);

    // if tree is empty add the node to the root
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (temp) {
      if (temp.value > value) {
        // go left
        if (!temp.left) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else if (temp.value < value) {
        // go right
        if (!temp.right) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      } else {
        // if equal then return undef
        return;
      }
    }
  }

  contains(value) {
    if (this.root === null || value === undefined) return false;

    let temp = this.root;
    while (temp) {
      if (value > temp.value) {
        temp = temp.right;
      } else if (value < temp.value) {
        temp = temp.left;
      } else {
        return true;
      }
    }
    return false;
  }
}
