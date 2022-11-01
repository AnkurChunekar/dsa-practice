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

  removeEdge(vertex1, vertex2) {
    if (this.adjecencyList[vertex1] && this.adjecencyList[vertex2]) {
      this.adjecencyList[vertex1] = this.adjecencyList[vertex1].filter(
        (el) => el !== vertex2
      );
      this.adjecencyList[vertex2] = this.adjecencyList[vertex2].filter(
        (el) => el !== vertex1
      );
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (this.adjecencyList[vertex]) {
      for (let item of this.adjecencyList[vertex]) {
        this.adjecencyList[item] = this.adjecencyList[item].filter(
          (el) => el !== vertex
        );
      }
      delete this.adjecencyList[vertex];
      return this;
    }
    return false;
  }
}

const myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("A", "D");
myGraph.addEdge("B", "D");
myGraph.addEdge("C", "D");

console.log(myGraph);
