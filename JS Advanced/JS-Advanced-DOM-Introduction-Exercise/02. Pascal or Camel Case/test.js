let text = ["hi", "how", "are", "you"]
let result = text[0]
for(let i = 1; i< text.length; i++){
    let currentWord = text[i];
    let leftSide = currentWord.substring(0, 1).toUpperCase();
    let rightSide = currentWord.substring(1);

    currentWord= leftSide + rightSide;
    result+= currentWord;

}
console.log(result);