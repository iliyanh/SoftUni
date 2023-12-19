function countStringOccurrences(text, word){
let counter = 0;
let arr = text.split(" ");
for(const words of arr){
    if(words === word){
        counter++
    }
}
console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence','is');
countStringOccurrences('softuni is great place for learning new programming languages',
'softuni'
);