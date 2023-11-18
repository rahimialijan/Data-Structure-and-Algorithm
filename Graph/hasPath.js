
const haspath = (graph, src, dst)=>{
    if (src == dst) return true;

    for (let neighbor of graph[src]){
        if (haspath(graph, neighbor, dst)==true)
        return true
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
console.log(haspath(graph, 'a', 'g'))