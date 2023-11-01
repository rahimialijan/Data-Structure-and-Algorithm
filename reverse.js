

function string(word){
const reverseWord= word.split('').reverse().join('');
return reverseWord;
}
console.log(string('Alijan'))
//using for loop
function str(text){
    let reverseStr = '';
    for(let i=text.length-1; i >=0; i--){
            reverseStr =reverseStr+text[i]
    }
    return reverseStr;
}
console.log(str('Alijan'))

//using es6 

const Reverse= (text)=>text.split('').reverse().join('');
console.log(Reverse('Alijan'))


//

let str1= 'AlijanRahimi';
const reverseV =[...str1].reverse().join('');
console.log(reverseV)