function subtract() {
    let firstNum = document.getElementById("firstNumber").value;
    let secondNum = document.getElementById("secondNumber").value;
    let out = firstNum - secondNum;

    document.getElementById("result").textContent = out
    
}