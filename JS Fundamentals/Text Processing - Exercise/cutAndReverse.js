function cutAndReverse(string){
let firstHalf = string.substring(0, string.length / 2);
let secondHalf = string.substring(string.length / 2);

let firstArray = firstHalf.split("");
let secondArray = secondHalf.split("");
console.log(firstArray.reverse().join(""));
console.log(secondArray.reverse().join(""));


}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');