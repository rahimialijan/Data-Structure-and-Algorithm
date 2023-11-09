


function stack(maxSize){

    let array=[];

    // if the array is empty 
    this.isEmpty=()=>array.length===0;
    // if the array is full
    this.isFull = () => array.length===maxSize;

    // push an element to array
    this.push = (item)=>{
        if (this.isFull()){
            console.log('Stack is full')
        } else{
            array.push(item)
        }
    }
    // remove one item from the array
    this.pop = ()=>{
        if (this.isEmpty()){
            console.log('the array is empty')
        } else{
            array.pop()
        }
    }

    // finding the top element

    this.peek = ()=>{
        if (this.isEmpty()){
            console.log('Array is empty')
        } else{
            return array[array.length -1]
        }
    }

    // list all elements of array

    this.listElements = ()=>{
        console.log(array)
    }
}


const myStack = new stack(5)

myStack.listElements()
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.push(5)
myStack.listElements()
console.log (myStack.peek())
myStack.pop()
myStack.listElements()
