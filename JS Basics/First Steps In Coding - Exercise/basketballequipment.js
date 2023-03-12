function basketballEquipment(input){
    let trainingTax = Number(input[0]);

    let shoes = trainingTax -(trainingTax * 0.40);
    let uniform = shoes -(shoes * 0.20);
    let ball = uniform / 4;
    let accessories = ball / 5;

    let totalPrice = trainingTax + shoes + uniform + ball + accessories;

    console.log(totalPrice);
}
basketballEquipment([365])