/* 
- Vertex is simply a node.
- The connection between two vertices is called a Edge.
- An arrow represents the direction is one way.
- A line represents bi-directional way.

- Two ways to store a graph
- 1. Adjecency Matrix
- 2. Adjecency List

*/

class Graph {
  constructor() {
    this.adjecencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjecencyList[vertex]) {
      this.adjecencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjecencyList[vertex1] && this.adjecencyList[vertex2]) {
      this.adjecencyList[vertex1].push(vertex2);
      this.adjecencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }
}
