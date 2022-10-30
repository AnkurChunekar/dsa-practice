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
}
