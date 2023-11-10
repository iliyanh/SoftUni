function factorialDivision(num, divider) {
    let firstNum = factorial(num);
    let secondNum = factorial(divider)
    return (firstNum / secondNum).toFixed(2)

function factorial(a){
    let b = 1
    for (let i = a ; i > 0; i--) {
        b *= i;
    }
    return b
}

}
console.log(factorialDivision(5, 2));
console.log(factorialDivision(6, 2));