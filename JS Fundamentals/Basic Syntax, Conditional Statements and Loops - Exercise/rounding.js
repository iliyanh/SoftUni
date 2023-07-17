function rounding(num, precision){

    if(precision > 15){
        precision = 15;
    }

   let finalResult = parseFloat(num.toFixed(precision))
    console.log(finalResult);

}
rounding(3.1415926535897932384626433832795, 2)
rounding(10.5, 3)