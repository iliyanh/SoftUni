function numbers(input) {

    let n = Number(input[0]);
    let numberAfterCalculation = 1;

    while (numberAfterCalculation <= n) {
        if (numberAfterCalculation > n) {
            break;
        }
        console.log(numberAfterCalculation);
        numberAfterCalculation = (numberAfterCalculation * 2) + 1;
      
    }
  

}
numbers(["3"]);