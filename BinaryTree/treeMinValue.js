class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

// finding the smallest value of binary tree using DFS
const treeMinValue= (root)=>{
    if (root ===null) return Infinity;
    let smallestVal= Infinity;
    const stack = [root];

    while (stack.length > 0){
        const current = stack.pop();
        if (current.value < smallestVal) smallestVal=current.value;
        if (current.left !== null) stack.push(current.left);
        if (current.right !== null) stack.push(current.right);
    }

    return smallestVal
};

const one = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(-5);
const f = new Node(6);

one.left=b;
one.right= c;
b.left=d;
b.right=e;
c.right= f;

console.log(treeMinValue(one))



//Finding smallest value using BFS

const treeMinValueBFS = (root)=>{
    if (root===null) return Infinity;
    let smallest = Infinity;
    let queue = [root];
    if (queue.length > 0){
        const current = queue.shift();
        if (current.value < smallest) smallest =current.value;
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return smallest;
}

const a = new Node(1);
const two = new Node(2);
const tree = new Node(3);
const four = new Node(4);
const five = new Node(-5);
const sex = new Node(6);

a.left=two;
a.right= tree;
two.left=four;
two.right=five;
tree.right= sex;

console.log(treeMinValueBFS(a))

//finding smallest value using recurstion

const treeMinValueRecursion = (root)=>{
    if (root ===null) return Infinity;
    let smallest = Infinity;
    const lettMin=treeMinValueRecursion(root.left)
    const rightMin=treeMinValueRecursion(root.right)

    return smallest = Math.min (root.value, lettMin, rightMin)
}

const a1 = new Node(1);
const b1 = new Node(2);
const c1 = new Node(3);
const d1 = new Node(4);
const e1 = new Node(-5);
const f1 = new Node(6);

a1.left=b1;
a1.right= c1;
b1.left=d1;
b1.right=e1;
c1.right= f1;

console.log(treeMinValueBFS(a1))