const Queue = require('./Queue');

describe('Queue', () => {
  test('Should have 1 total element and not empty', () => {
    const queue = new Queue();

    queue.enqueue('A');

    expect(queue.size()).toEqual(1);
    expect(queue.isEmpty()).toBeFalsy();
  });

  test('Should have 2 total elements and not empty', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.size()).toEqual(2);
    expect(queue.isEmpty()).toBeFalsy();
  });

  test('Should have 0 element and empty', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.dequeue();

    expect(queue.size()).toEqual(0);
    expect(queue.isEmpty()).toBeTruthy();
  });

  test(`Should return ABC when dequeue`, () => {
    const queue = new Queue();

    queue.enqueue('ABC');
    queue.enqueue('DEF');
    
    expect(queue.dequeue()).toEqual('ABC');
    expect(queue.size()).toEqual(1);
    expect(queue.isEmpty()).toBeFalsy();
  });

  test('Should return error when dequeue on empty queue', () => {
    const queue = new Queue();

    try {
      queue.dequeue();
    } catch (err) {
      expect(err.message).toEqual('Queue is empty!');
    }
  });
});

