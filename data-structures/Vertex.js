class Vertex {
  constructor(value, index = 0) {
    this.value = value;
    this.successors = new Map();
    this.predecessors = new Map();

    this.index = parseInt(index);
    this.indexes = [ this.index ];
    this.lowestIndex = this.index;
    this.highestIndex = this.index;
  }

  addIndex(index) {
    const safeIndex = parseInt(index);

    /* istanbul ignore else */
    if (!this.indexExists(index))
      this.indexes.push(parseInt(index));

    /* istanbul ignore else */
    if (this.lowestIndex > index)
      this.lowestIndex = index;

    /* istanbul ignore else */
    if (this.highestIndex < index)
      this.highestIndex = index;
  }

  indexExists(index) {
    return this.indexes.indexOf(index) > -1;
  }

  addSuccessor(vertex) {
    const exists = this.successors.has(vertex.value);

    /* istanbul ignore else */
    if (!exists)
      this.successors.set(vertex.value, vertex);
  }

  addPredecessor(vertex) {
    const exists = this.predecessors.has(vertex.value);

    /* istanbul ignore else */
    if (!exists)
      this.predecessors.set(vertex.value, vertex);
  }

  getSuccessors() {
    return this.successors;
  }

  getPredecessors() {
    return this.predecessors;
  }

  getOccurences() {
    return this.indexes.length;
  }

  getMaxDistance() {
    return this.highestIndex - this.lowestIndex;
  }
}

module.exports = Vertex;
