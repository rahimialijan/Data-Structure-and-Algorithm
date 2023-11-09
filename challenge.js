
const array1 = ['a', 'b'];
const array2 = ['a', 'b', 'c', 'd']; 

function compareArr(array1,array2){
    //using loop 
    //compare both elements of arrs using if statement
    //find the output or new arr
    let arrary3=[]
    for (let i=0; i<array1.length; i++){            
        for (let j=0; j<array2.length; j++){
          arrary3 = array1[i].includes(array2[j]) 
          console.log(arrary3)
        }
    }




    return arrary3
}

console.log(compareArr(array1, array2))



//const array1 = ['a', 'b'];
//const array2 = ['a', 'b', 'c', 'd']; 
// should return ["c", "d"]



