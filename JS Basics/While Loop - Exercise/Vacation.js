function vacation(input) {

    let vacationCost = Number(input[0]);
    let currentMoney = Number(input[1]);
    let index = 2;
    let command = input[index];
    let days = 0;
    let spendingDays = 0;

    while (currentMoney < vacationCost) {
        index++;
        days++;
        if (command === "spend") {
            spendingDays++;
            if (spendingDays === 5) {
                console.log("You can't save the money.");
                console.log(`${days}`);
                break;
            }

            let moneyToSpend = Number(input[index]);
            currentMoney = currentMoney - moneyToSpend;

            if (currentMoney < 0) {
                currentMoney = 0;
            }

        } else if (command === "save") {
            spendingDays = 0;
            let moneyToSave = Number(input[index]);
            currentMoney = currentMoney + moneyToSave;
            
        }
        index++;
        command = input[index];
        
    }
    if (currentMoney >= vacationCost) {
        console.log(`You saved the money for ${days} days.`);
    }
    
}
vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])







