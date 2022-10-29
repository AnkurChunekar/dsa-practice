/* 
Queue is just like a line of people, when we add someone we say ENQUEUE,
when we remove we say DEQUEUE

FIFO -> first in first out

We will use LL to create a queue: 

enqueue -> push in LL O(1);
dequeue -> unshift in LL O(1);

null pointing end will be first. and to the other extreme will be last
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = this.first;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) return;

    const temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }

    this.length--;
    return temp;
  }
}

const myQueue = new Queue(4);
myQueue.enqueue(5);
myQueue.dequeue();
console.log("myQueue", myQueue);
