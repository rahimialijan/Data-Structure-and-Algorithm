const recursiveDFSGraph = (graph, root)=>{

    let result =[root];
    for (let neighbor of graph[root]){
        result = result.concat(recursiveDFSGraph(graph, neighbor))    
    }
    return result;
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
