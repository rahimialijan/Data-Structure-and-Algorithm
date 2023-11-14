class Node {
    constructor (value){
        this.value=value;
        this.left= null;
        this.right=null;
    }
}

const treeMaxPath = (root)=>{
    if (root ===null) return -Infinity;
    if (root.left ===null && root.right===null) return root.value;
    let maxPath = Infinity;
    const leftPath=treeMaxPath(root.left) + root.value;
    const rightPath=treeMaxPath(root.right)+ root.value;


    return maxPath = Math.max (leftPath, rightPath)
}

const a1 = new Node(1);
const b1 = new Node(2);
const c1 = new Node(3);
const d1 = new Node(4);
const e1 = new Node(100);
const f1 = new Node(6);

a1.left=b1;
a1.right= c1;
b1.left=d1;
b1.right=e1;
c1.right= f1;

console.log(treeMaxPath(a1))