function wordOccurrences(input){
let obj = {}

for(let word of input){
    obj[word] = 0

}

for(let word of input){
    if(obj.hasOwnProperty(word)){
        obj[word] += 1;
    }

} 

let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1])
for(let [key, value] of sorted){
    console.log(`${key} -> ${value} times`);
}

}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);