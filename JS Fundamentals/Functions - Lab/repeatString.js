function repeatString(text, count){
    let finalText = "";

    for(let i = 0 ; i < count ; i++){
        finalText += text
    }
    return finalText
}
console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));