
//printer from 5....1
function Nums(n){
    if (n === 10){
        return
    }
    console.log(n)

    Nums(n +1)
}

//Nums(5)

//print from 1....5
function NumRev(n){
    if (n === 0){
        return
    }

    NumRev(n -1)
    console.log(n)
}
//NumRev(5)


//print both from 1...5 and 5...1
function BothNums(n){

    // condition
    if (n === 0){
        return
    }
    //body
    console.log(n)
    //recursive call
    BothNums(n -1)

    //second body
    console.log(n)
}
//BothNums(5)

// factorail
function Factorail(n){
    if (n <= 1){
        return 1
    }
    const output = n * Factorail(n-1)
    return output
}

//console.log(Factorail(5))

// Sum of all numbers

function sum(n){
    if (n <= 1){
        return 1
    }
    const output = n + sum(n-1)
    return output
}

console.log(sum(5))


