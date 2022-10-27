/*
for eg..
{
    value: 4,
    next: null,
    prev: null
}
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const last = this.tail;
      last.next = newNode;
      newNode.prev = last;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return;

    const last = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = last.prev;
      this.tail.next = null;
      last.prev = null;
    }

    this.length--;
    return last;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const first = this.head;
      first.prev = newNode;
      newNode.next = first;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return;

    const first = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = first.next;
      first.next.prev = null;
      first.next = null;
    }

    this.length--;
    return first;
  }

  get(index) {
    if (index < 0 || index >= this.length) return;

    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) temp = temp.next;
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) temp = temp.prev;
    }

    return temp;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) return;

    const item = this.get(index);
    item.value = value;
    return this;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    const item = this.get(index);

    item.prev.next = newNode;
    newNode.next = item;
    newNode.prev = item.prev;
    item.prev = newNode;

    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift(value);
    if (index === this.length - 1) return this.pop(value);

    const item = this.get(index);

    item.prev.next = item.next;
    item.next.prev = item.prev;
    item.next = null;
    item.prev = null;

    this.length--;
    return item;
  }
}

const dll = new DoublyLinkedList(0);
dll.push(1);
dll.push(2);
