//Solving with for loop

function factorial(n){
    if (n===0 || n===1){
        return 1
    }
    for (let i=n-1; i>=1; i--){
        n=n*i
    }
    return n;
}
console.log(factorial(3))


//Solving with while loop

const fac = function(num){
    let result= num;
    if (num===0 || num===1){
        return 1
    }

    while(num > 1){
        num --;
        result = result *num;
    }
    return result
}
console.log(fac(3));


// solving by recurtion

const fact = (n)=> (n===0 ? 1 : n*fac(n-1));

console.log(fact(5))