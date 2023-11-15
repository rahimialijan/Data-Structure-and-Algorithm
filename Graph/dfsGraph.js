

// print all node lists using DFS
const depthFirstSearch = (graph, root)=>{
    const stack = [root];

    while(stack.length > 0){
        const current= stack.pop()
        console.log(current)
        for (let neighbor of graph[current]){
            stack.push(neighbor)
        }
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
console.log(depthFirstSearch(graph, 'a'))

//      a -- b -- d -- f
//      |
//      c -- e
// iterate through graph keys 
for (let key in graph){
    console.log(`Node ${key} is connected to nodes: ${graph[key].join(',')}`)
}

// iterate through values of graph
for (let values of Object.values(graph)){
    console.log(`Connected nodes ${values.join(', ')}`)
}



