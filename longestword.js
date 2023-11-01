


function longWordLength(text){

    let strSplit= text.split(" ");
    let longestword=0

    for (let i=0; i<strSplit.length; i++){
        if(strSplit[i].length > longestword){
            longestword= strSplit[i].length;
        }
    }
    return longestword;
}
console.log(longWordLength('this functionWill find the longest word throuth this sentence'))





function longestWord(text){
    let sortedText = text.split(' ').sort((a,b)=> b.length - a.length)
    return sortedText[0]
}

console.log(longestWord('this functionWill find the longest word throuth this sentence'))