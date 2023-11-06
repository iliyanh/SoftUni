function signCheck(firstNum, secondNum, thirdNum) {
    let result = "Positive";
    let  sum = firstNum * secondNum * thirdNum;
  
   if(sum < 0){
    result = "Negative"
    return result
   }
   return result



}
console.log(signCheck(5, 12, -15));
console.log(signCheck(-6, -12, 14));
console.log(signCheck(-1, -2, -3));
console.log(signCheck(-5, 1, 1));