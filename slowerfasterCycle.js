class Node{
    constructor(values, next=null){
        this.values=values;
        this.next=next
    }
}

function checkCycle(head){
        let slowerPointer= head, fasterPointer= head;

        while(fasterPointer!== null && slowerPointer.next!==null){
            fasterPointer =fasterPointer.next.next;
            slowerPointer =slowerPointer.next;
            if(slowerPointer===fasterPointer){
                return true
            }
         }
         return false
}


const node6 = new Node(6);
const node5 = new Node(5, node6);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);
node6.next = node3;

console.log(checkCycle(node1))
