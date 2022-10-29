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
}
