function pascalCaseSplitter(text){
let result = []
let startIndex = 0;
for(let i = 1; i < text.length ; i++ ){
    let currentChar = text[i];
    let endIndex = i;
    if(currentChar.charCodeAt() > 64 && currentChar.charCodeAt() < 91){
        let word = text.substring(startIndex, endIndex)
        startIndex = endIndex
        result.push(word)
    }
    if(i === text.length - 1){
        let word = text.substring(startIndex, endIndex + 1)
        startIndex = endIndex
        result.push(word)
    }
}
console.log(result.join(", "));


}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');