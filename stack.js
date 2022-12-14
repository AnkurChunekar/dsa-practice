class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
LIFO - last in first out.
Stack is like can of tennis balls
Commonly used Data structure to create a stack: Array, Linked List 
*/

class Stack {
  // null pointing end will be the bottom of the stack.
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  //  much like unshift of LL O(1)
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
    return this;
  }

  // much like shift of LL
  pop() {
    if (this.length === 0) return;

    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;

    this.length--;
    return temp;
  }
}

const myStack = new Stack(4);
myStack.push(3);
myStack.push(2);
myStack.pop();
console.log("myStack", myStack);
