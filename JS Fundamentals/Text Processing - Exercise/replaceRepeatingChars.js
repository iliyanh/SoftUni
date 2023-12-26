function replaceRepeatingChars(text){

    let result = ""

    for(let i = 0; i< text.length ; i++){
        let charOne = text[i];
        let charTwo = text[i + 1];
        if (charOne !== charTwo){
            result += charOne
        }
    }
    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');