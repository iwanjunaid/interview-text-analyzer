const Vertex = require('./Vertex');

describe('Vertex', () => {
  test('Should have value A and index 0', () => {
    const vertex = new Vertex('A');

    expect(vertex.value).toEqual('A');
    expect(vertex.index).toEqual(0);
  });

  test('Should have total 1 occurences', () => {
    const vertex = new Vertex('A');

    vertex.addIndex(0);

    expect(vertex.getOccurences()).toEqual(1);
  });

  test('Should have total 2 occurences', () => {
    const vertex = new Vertex('A');

    vertex.addIndex(1);

    expect(vertex.getOccurences()).toEqual(2);
  });

  test('Should have index 0 exists', () => {
    const vertex = new Vertex('A');

    expect(vertex.indexExists(0)).toBeTruthy();
  });

  test('Should have index 1 exists', () => {
    const vertex = new Vertex('A', 1);

    expect(vertex.indexExists(1)).toBeTruthy();
  });

  test('Should have index 0, 1, 2 exists', () => {
    const vertex = new Vertex('A', 0);

    vertex.addIndex(1);
    vertex.addIndex(2);

    expect(vertex.indexExists(0)).toBeTruthy();
    expect(vertex.indexExists(1)).toBeTruthy();
    expect(vertex.indexExists(2)).toBeTruthy();
  });

  test('Should set new lowest index to 1', () => {
    const vertex = new Vertex('A', 3);

    vertex.addIndex(1);

    expect(vertex.lowestIndex).toEqual(1);
  });

  test('Should set new highest index to 5', () => {
    const vertex = new Vertex('A', 0);

    vertex.addIndex(5);

    expect(vertex.highestIndex).toEqual(5);
  });

  test('Should have max distance 1', () => {
    const vertex = new Vertex('A', 0);

    vertex.addIndex(1);

    expect(vertex.getMaxDistance()).toEqual(1);
  });

  test('Should have 1 successor', () => {
    const vertexA = new Vertex('A');
    const vertexB = new Vertex('B');

    vertexA.addSuccessor(vertexB);

    expect(vertexA.getSuccessors().size).toEqual(1);
  });

  test('Should have 1 predecessor', () => {
    const vertexA = new Vertex('A');
    const vertexB = new Vertex('B');

    vertexB.addPredecessor(vertexA);

    expect(vertexB.getPredecessors().size).toEqual(1);
  });
});
