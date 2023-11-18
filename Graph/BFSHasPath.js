
const haspath = (graph, src, dst)=>{
    const queue = [src];


    while (queue.length > 0){
        const current = queue.shift()
        if (current == dst) return true
        for (let neighbor of graph[current]){
            queue.push(neighbor)
        }
    }
    return false;
}


const graph={
    a: ['c','b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
    g: []
}
console.log(haspath(graph, 'a', 'f'))