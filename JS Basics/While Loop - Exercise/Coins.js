function coins(input){
    let sum = (Number(input[0]) * 100).toFixed(2);
    let coins = 0;

    while (sum > 0 ){
        
        if(sum >= 200){
            sum -= 200;
            coins++;
        } else if ( sum >= 100){
            sum -= 100;
            coins++;

        }else if ( sum >= 50){
            sum -= 50;
            coins++;
        }else if ( sum >= 20){
            sum -= 20;
            coins++;
        }else if ( sum >= 10){
            sum -= 10;
            coins++;
        }else if ( sum >= 5){
            sum -= 5;
            coins++;
        }else if ( sum >= 2){
            sum -= 2;
            coins++;
        }else if ( sum >= 1){
            sum -= 1;
            coins++;
        }
    }    
    console.log(coins);
}
coins(["1.23"])