

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}


function linkedList(){
    this.head = null;
    //insert new node to linked list
    this.insertNode = (value)=>{
        if(!this.head){
            this.head = new Node(value)
        } else{
            let currentPointer = this.head;
            while(currentPointer.next !==null){
                currentPointer =currentPointer.next;
            }
            currentPointer.next = new Node (value)
        }
    }

    //insert node at head of linklist

    this.insertAtHead = (value)=>{
        if(!this.head){
            this.head = new Node(value);
        } else{
            const newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    //insert a node at custome postion of the linked list

    this.insertAtCustomePosition = (postion, value)=>{
        if (postion ===1) return this.insertAtHead(value);
        let currentPointer = this.head;
        let traverseCounter = 1;
        while (traverseCounter < postion - 1){
            traverseCounter ++;
            currentPointer = currentPointer.next;
            if (currentPointer===null){
                console.log('the position provided is out of bounds')
                return 
            }
        }

        let newNodeInList = currentPointer.next;
        currentPointer.next= new Node (value);
        currentPointer.next.next= newNodeInList;

    }

    // delete a node from custome position in linked list

    this.deleteAtPostion = (postion)=>{
        if (postion ===1){
            this.head = this.head.next;
        } else{
            let currentPointer =this.head;
            let traverseCounter = 1;
            while (traverseCounter < postion - 1){
                traverseCounter ++;
                currentPointer = currentPointer.next;
                if (currentPointer.next === null){
                    console.log ('the position provided is out of bounds')
                    return
                }
            }
            currentPointer.next =currentPointer.next.next;
        }
    }

    //traverse through all linked list nodes
    this.traverse = ()=>{
        let currentPointer = this.head;
        while(currentPointer.next !==null){
            console.log(currentPointer.value)
            currentPointer = currentPointer.next
        }
       
    }
}


const list = new linkedList();
[1,2,3,4,5].forEach(item =>list.insertNode(item));
list.traverse()
list.insertAtHead(8)
list.insertAtHead(10)
list.traverse()
console.log('-------------------insert at custome position--------------------')
list.insertAtCustomePosition(5,100)
list.traverse()
console.log('-------------------delete node from custome position--------------------')
list.deleteAtPostion(5)
list.traverse()
