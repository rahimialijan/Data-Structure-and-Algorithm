class Node {
    constructor(value) {
        this.value=value;
        this.left=null;
        this.right=null;
    }
    
}

//Breath-first-search is using queue for searching and recursion implementation is not prefered
const breathFirstSearch = (rootNode)=>{
    if (rootNode===null) return [];

    const result= [];
    const queue=[rootNode];
    while(queue.length > 0){
        const current= queue.shift()
        console.log(current.value);
        if (current.left!==null) queue.push(current.left);
        if (current.right!==null) queue.push(current.right);
        result.push(current.value);
    }

    return result;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left=b;
a.right= c;
b.left=d;
b.right=e;
c.right=f;
console.log(breathFirstSearch(a))