const recursiveDFSGraph = (graph, root)=>{
    console.log(root)
    for (let neighbor of graph[root]){
        recursiveDFSGraph(graph, neighbor)
    }

};

const graph={
    a: ['c','b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}
console.log(recursiveDFSGraph(graph, 'a'))
