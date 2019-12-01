class Queue {
  constructor() {
    this.elements = [];
  }

  isEmpty() {
    return this.size() == 0;
  }

  size() {
    return this.elements.length;
  }

  enqueue(element) {
    this.elements.push(element);
  }

  dequeue() {
    if (this.isEmpty())
      throw new Error('Queue is empty!');

    return this.elements.shift();
  }
}

module.exports = Queue;

