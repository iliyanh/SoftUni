function accountBalance(input){

    let index = 1;
    let moneyInn = input[0];
    let totalMoney = 0;

    while(moneyInn !== "NoMoreMoney"){
       
        let amount = Number(moneyInn);
            if (amount < 0){
                console.log("Invalid operation!");
                break;
            }
        
        totalMoney += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        moneyInn = input[index];
        index++;

    }
    console.log(`Total: ${totalMoney.toFixed(2)}`);
  

}
accountBalance(["120",
"45.55",
"-150"])

