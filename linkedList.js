/* 

{
  value: 4,
  next: null
}


 - POP
 - edge cases,- has some items,
              - has no item
              - has one item
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    if (value !== undefined || value !== null) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return;

    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    // if we do not have any items
    if (!this.head) return;

    // if we have more than one item
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    //  if only single item
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  get(index) {
    // invalid index
    if (index < 0 || index >= this.length) return;

    // valid index
    let temp = this.head;
    for (let i = 0; i < index; i++) temp = temp.next;
    return temp;
  }

  set(index, value) {
    const result = this.get(index);
    if (result) {
      result.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    const pre = this.get(index - 1);
    newNode.next = pre.next;
    pre.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const pre = this.get(index - 1);
    const temp = pre.next;
    pre.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let prev = null;
    let next = temp.next;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

const myList = new LinkedList(1);
myList.push(2);
myList.push(3);
console.log(myList.reverse());
