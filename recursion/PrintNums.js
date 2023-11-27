

function Nums(n){
    if (n === 10){
        return
    }
    console.log(n)

    Nums(n +1)
}

Nums(5)