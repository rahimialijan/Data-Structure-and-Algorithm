

// traverse through graph using BFS
const breadthFirstSearch = (graph, source)=>{
    let result = [];
    const queue= [source];
    while(queue.length > 0){
        const current= queue.shift()
        result.push(current)
        for (let neighbor of graph[current]){
           queue.push(neighbor)
        }
       
    }
    return result;  
}


const graph={
    a: ['c','b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}
console.log(breadthFirstSearch(graph, 'a'))