




class Node{
    constructor(val){
        this.val=val;
        this.left= null;
        this.right= null;
    }
}


// find the the total sum of node values using recurstion

const recursionSumTree = (root)=>{
    if (root === null ) return 0;
    let totalSum = 0

     return totalSum = root.val + recursionSumTree(root.left) + recursionSumTree(root.right);
}

const one = new Node(1);
const two = new Node(2);
const tree = new Node(3);
const four = new Node(4);
const five = new Node(5);
const sex = new Node(100);

one.left=two;
one.right= tree;
two.left=four;
two.right=five;
tree.right= sex;

console.log(recursionSumTree(one))

// finding the total sum of node values using iteration(while)

const totalSumTree= (root)=>{
    if (root === null) return 0;
    let totalValue =0
    const queue= [root];
    while (queue.length > 0){
        const current= queue.shift()
        totalValue += current.val;
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right)
    }

    return totalValue;
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(100);

a.left=b;
a.right= c;
b.left=d;
b.right=e;
c.right= f;

console.log(totalSumTree(a))