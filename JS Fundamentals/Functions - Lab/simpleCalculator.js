function calculator(firstNum, secondNum, operator){
    let result = 0;
    switch(operator){
        case "multiply":result = firstNum * secondNum; break;
        case "divide":result = firstNum / secondNum; break;
        case "add":result = firstNum + secondNum; break;
        case "subtract":result = firstNum - secondNum; break;
    }
    return result

}
console.log(calculator(5,5,'multiply'));
console.log(calculator(40,8,'divide'));
console.log(calculator(12,19,'add'));
console.log(calculator(50,13,'subtract'));