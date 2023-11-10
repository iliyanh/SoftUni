function charactersInRange(charA, charB){
let buff = "";
let charAToNumber = charA.charCodeAt(0);
let charBToNumber = charB.charCodeAt(0);


let start = charAToNumber > charBToNumber ? charBToNumber : charAToNumber;
let end = charAToNumber > charBToNumber ? charAToNumber : charBToNumber;


for(let i = start + 1; i < end ; i++){
    buff += String.fromCharCode(i)  + " ";
}
return buff


}
console.log(charactersInRange('a','d'));
console.log(charactersInRange('#',':'));
console.log(charactersInRange('C','#'));