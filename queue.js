

function Queue(maxNum){
    let arr = [];

    // Check if the arr is empty
    this.isEmpty = ()=> arr.length === 0;
    // Check if the arr is full

    this.isFull = () => arr.length === maxNum;


    // enqueue element to arr
    this.enqueue = (item)=>{
        if (this.isFull()){
            console.log('The arr is full')
        } else{
            arr.push(item)
        }
    }

    // dequeue an element for arr
    this.dequeue = ()=>{
        if (this.isEmpty()){
            console.log('the queue is empty')
        } else{ 
            arr.shift()
        }
    }

    // checking the first element of queue
    this.peek = ()=>{
        if (this.isEmpty()){
            console.log('the queue is empty')
        } else{
            return arr[0];
        }
    }

    this.listElements = ()=>{
        console.log (arr)
    }
}


const myQueue = new Queue (6)

myQueue.listElements()

myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)
myQueue.enqueue(5)

myQueue.listElements()
myQueue.dequeue()
myQueue.listElements()
console.log(myQueue.peek())
myQueue.dequeue()
myQueue.listElements()

