function oddOccurrences(input){
let arr = input.split(" ").map(x => x.toLowerCase())
let obj = {}
let result = []

for(let element of arr){
    if(obj.hasOwnProperty(element)){
        obj[element] += 1;
    } else{

        obj[element] = 1
    }
}
//console.log(obj);

let newArr = Object.entries(obj)
//console.log(newArr);
let sum = ""
for(let [key, value] of newArr){
    if (value % 2 === 1){
        sum += ` ${key}`
    }


}
console.log(sum);





}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');