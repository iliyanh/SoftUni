function oddOrEvenSum(num){
    let odd = 0;
    let even = 0;
    let currentDigit = 0;
    let text = numberToString(num)

    for(let i = 0; i < text.length; i++){
        currentDigit = Number(text[i]);

        if(currentDigit % 2 === 0){
            even += currentDigit;
        } else if ( currentDigit % 2 === 1){
            odd += currentDigit;
        }
    }
    
    return `Odd sum = ${odd}, Even sum = ${even}`

    function numberToString(a){
        return a + ""
    }
}
console.log(oddOrEvenSum(1000435));
console.log(oddOrEvenSum(3495892137259234));