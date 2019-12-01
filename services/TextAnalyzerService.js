const Vertex = require('../data-structures/Vertex');
const Graph = require('../data-structures/DiGraph');

class TextAnalyzerService {}

TextAnalyzerService.prototype.analyze = (text) => {
  return new Promise(resolve => {
    const result = [];
    const sanitizedText = text.replace(/\s+/g, '').trim();
    const graph = new Graph();
    const vertex = new Vertex(sanitizedText.charAt(0));
    let firstVertex = vertex;

    for (let i = 1; i < sanitizedText.length; i++) {
      const newVertex = new Vertex(sanitizedText.charAt(i), i);

      graph.addEdge(firstVertex, newVertex);

      firstVertex = newVertex;
    }

    graph.bfs(vertex, (v) => {
      const value = v.value;
      const occurences = v.getOccurences();
      const maxDistance = v.getMaxDistance();
      const successors = v.getSuccessors();
      const predecessors = v.getPredecessors();

      const successorList = [];
      const predecessorList = [];

      for (const value of successors.values())
        successorList.push(value.value);

      for (const value of predecessors.values())
        predecessorList.push(value.value);

      result.push({
        vertex: value,
        occurences,
        maxDistance,
        before: successorList.join(', '),
        after: predecessorList.join(', '),
      });
    }, () => {
      resolve(result);
    });
  });
};

module.exports = TextAnalyzerService;
