function stringSubstring(word, text){

let buff = true;
let string = text.split(" ");


for(let words of string){
    words = words.toLowerCase()
    if(words === word){
        buff = false;
        console.log(word);
    }
}
if(buff){
    console.log(`${word} not found!`);
}


}
stringSubstring('javascript',
'JavaScript is the best programming language'
);
stringSubstring('python',
'JavaScript is the best programming language'
);