function histogram(input){
    let number = Number(input[0]);
    let sum = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0

    for ( let index = 1; index <= number ; index++){
        let currentNumber = Number(input[index]);


        if ( currentNumber < 200){
            p1++;
        } else if (currentNumber < 400){
            p2++
        } else if (currentNumber< 600){
            p3++
        }else if (currentNumber < 800){
            p4++
        } else if (currentNumber >= 800){
            p5++
        }
    }
    console.log(`${(p1 / number * 100).toFixed(2)}%`);
    console.log(`${(p2 / number * 100).toFixed(2)}%`);
    console.log(`${(p3 / number * 100).toFixed(2)}%`);
    console.log(`${(p4 / number * 100).toFixed(2)}%`);
    console.log(`${(p5 / number * 100).toFixed(2)}%`);
}

histogram(["3",
"1",
"2",
"999"])
