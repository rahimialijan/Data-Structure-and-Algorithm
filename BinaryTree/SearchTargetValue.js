class Node {
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

// Searching for target value using BFS
const searchTargetValue= (rootNode, target)=>{
    if (rootNode===null) return false;
    const queue=[rootNode];

    while(queue.length > 0){
        const current = queue.shift();
        console.log(current.value);
        if (current.value === target) return true;
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
 return false
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
console.log(searchTargetValue(a, 'e'))


// Searching for the target value using recursion

const recursionSearch = (rootNode, target)=>{
        if (rootNode===null)  return false;
        if (rootNode.value === target) return true;
       
        return recursionSearch(rootNode.left, target) || recursionSearch(rootNode.right, target)
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

console.log(recursionSearch(one, 100))