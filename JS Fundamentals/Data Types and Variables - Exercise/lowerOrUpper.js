function lowerOrUpper(char){

let num = char.charCodeAt();

if (num > 96 && num < 123){
    console.log("lower-case");
} else if(num > 64 && num < 91){
    console.log("upper-case");
}


}
lowerOrUpper("L");
lowerOrUpper("f");