function perfectNumber(num) {
    let divisors = [];
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }

    }
    let sum = 0;
    for (let j = 0; j < divisors.length; j++) {
        sum += divisors[j];
    }
    if (sum === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);