class Node {
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}


const depthFirstValues = (root)=>{
    if (root===null) return [];

    const result= [];
    const stack = [root];
    while(stack.length>0){
        const current =stack.pop();
        result.push(current.value)
        console.log(current.value)
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left)
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
console.log(depthFirstValues(a))


//Implementing the depth first search using recursion

const DFSvalue=(root)=>{
    if (root===null) return [];

    const leftValues=DFSvalue(root.left);
    const rightValue =DFSvalue(root.right);

      return result =[root.value,...leftValues, ...rightValue];
    
}

const one = new Node(1);
const two = new Node(2);
const tree = new Node(3);
const four = new Node(4);
const five = new Node(5);
const sex = new Node(6);

one.left=two;
one.right= tree;
two.left=four;
two.right=five;
tree.right= sex;

console.log(DFSvalue(one))