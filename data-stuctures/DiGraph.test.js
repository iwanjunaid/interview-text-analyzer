const Vertex = require('./Vertex');
const Graph = require('./DiGraph');

describe('DiGraph', () => {
  test('Should have 1 vertex', () => {
    const graph = new Graph();
    const vertex = new Vertex('A', 0);

    graph.addVertex(vertex);

    expect(graph.countVertices()).toEqual(1);
  });

  test('Should have 2 vertices', () => {
    const graph = new Graph();
    const vertexA = new Vertex('A', 0);
    const vertexB = new Vertex('B', 1);

    graph.addVertex(vertexA);
    graph.addVertex(vertexB);

    expect(graph.countVertices()).toEqual(2);
  });

  test('Should have 2 successors and 1 predecessors', () => {
    const graph = new Graph();
    const vertexPreA = new Vertex('Pre-A', 0);
    const vertexA = new Vertex('A', 0);
    const vertexB = new Vertex('B', 1);
    const vertexC = new Vertex('C', 2);

    graph.addEdge(vertexPreA, vertexA);
    graph.addEdge(vertexA, vertexB);
    graph.addEdge(vertexA, vertexC);

    expect(vertexA.getSuccessors().size).toEqual(2);
    expect(vertexA.getPredecessors().size).toEqual(1);
  });

  test('Should call callback three times', () => {
    const graph = new Graph();
    const vertexA = new Vertex('A', 0);
    const vertexB = new Vertex('B', 1);
    const vertexC = new Vertex('C', 2);

    graph.addEdge(vertexA, vertexB);
    graph.addEdge(vertexA, vertexC);

    const mockCb = jest.fn(item => item);
    const mockDoneCb = jest.fn(() => {});

    graph.bfs(vertexA, mockCb, mockDoneCb);

    expect(mockCb.mock.calls.length).toBe(3);
    expect(mockCb.mock.calls[0][0]).toEqual(vertexA);
    expect(mockCb.mock.calls[1][0]).toEqual(vertexB);
    expect(mockCb.mock.calls[2][0]).toEqual(vertexC);

    expect(mockDoneCb.mock.calls.length).toBe(1);
  });
});

