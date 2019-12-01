const Queue = require('./Queue');

class DiGraph {
  constructor() {
    this.vertices = new Map();
  }

  countVertices() {
    return this.vertices.size;
  }

  addVertex(vertex) {
    if (this.vertices.has(vertex.value)) {
      const existingVertex = this.vertices.get(vertex.value);

      existingVertex.addIndex(vertex.index);

      return existingVertex;
    }

    this.vertices.set(vertex.value, vertex);

    return vertex;
  }

  addEdge(sourceVertex, targetVertex) {
    const source = this.addVertex(sourceVertex);
    const target = this.addVertex(targetVertex);

    source.addSuccessor(target);
    target.addPredecessor(source);

    return { source, target };
  }

  bfs(rootVertex, callback, doneCallback) {
    const visited = new Map();
    const queue = new Queue();

    queue.enqueue(rootVertex);

    while (!queue.isEmpty()) {
      const vertex = queue.dequeue();

      /* istanbul ignore else */
      if (!visited.has(vertex.value)) {
        /* istanbul ignore else */
        if (callback && typeof callback === 'function')
          callback(vertex);

        visited.set(vertex.value);

        vertex.getSuccessors().forEach(item => {
          /* istanbul ignore else */
          if (item.value !== vertex.value) {
            queue.enqueue(item);
          }
        });
      }
    }

    /* istanbul ignore else */
    if (doneCallback && typeof doneCallback === 'function')
      doneCallback();
  }
}

module.exports = DiGraph;

