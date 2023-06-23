function demo(input) {
    let index = 0;
    let destiantion = input[index];
    let moneyNeed = 0;
   
    while (destiantion !== "End") {
      let sum = 0;
      index++;
      moneyNeed = input[index];
      index++;
      while (sum <= moneyNeed) {
        let savedMoney = Number(input[index]);
        sum += savedMoney;
        if (sum >= moneyNeed) {
          console.log(`Going to ${destiantion}!`);
          break;
        }
        index++;
      }
      destiantion = input[++index];
    }
  }
  demo([
    "France",
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
    "End",
  ]);
  