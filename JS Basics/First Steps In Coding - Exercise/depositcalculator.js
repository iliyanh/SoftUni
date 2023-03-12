function depositCalculator(input){
    let deposit = Number(input[0]);
    let time = input[1];
    let apr = input[2];
    let accuredInterest = deposit * apr / 100;
    let accuredInterestForM = accuredInterest /12;
    let finalSum = deposit + time * accuredInterestForM;

    console.log(finalSum);
}
depositCalculator([200, 3, 5.7]);