

const starPatern=(star)=>{

    let pattern= ''
    for(let i=0; i<=star; i++){
        for (let j=i; j<=star; j++){
          pattern = pattern +'*'
        }
        pattern= pattern + '\n'
    }

    return pattern
}

console.log(starPatern(6))


const numPattern = (num) => {
    let pattern = '';
    for (let i =num; i >=1; i--) {
      for (let j = 1; j <= i; j++) {
        pattern = pattern+ j; 
      }
      pattern = pattern + '\n';
    }
    return pattern;
  }
  
  console.log(numPattern(4));