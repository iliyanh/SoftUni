function traveling(input) {

    let index = 0; 
    let desiredDestination = input[index];
    let totalSavedMoney = 0;
    
    while(desiredDestination !== "End"){
        let name = desiredDestination;
        index++;
        let price = Number(input[index]);
        index++;
        let savedMoney = Number(input[index]);

            while(totalSavedMoney < price){
                totalSavedMoney += savedMoney;
                index++;
                savedMoney = Number(input[index]);

            }
            if (totalSavedMoney >= price){
                console.log(`Going to ${name}!`);
            }
            

        desiredDestination = input[index];
        totalSavedMoney = 0;

            if (desiredDestination === "End"){
                break;
            }
    }
    

}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
