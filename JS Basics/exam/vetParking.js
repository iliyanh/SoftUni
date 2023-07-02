function vetParking(input){

    let days = Number(input[0]);
    let hours = Number(input[1]);
    let totalPrice = 0;


    for(let currentDay = 1; currentDay <= days; currentDay++){

        let dayPrice = 0;
        let currentPrice = 0;

        for( let currentHour = 1; currentHour <= hours; currentHour++){

            let isDayEven = currentDay % 2 === 0;
            let isHourEven = currentHour % 2 === 0;

            if ( isDayEven && !isHourEven){
                currentPrice = 2.50;
            } else if ( !isDayEven && isHourEven){
                currentPrice = 1.25;
            } else {
                currentPrice = 1;
            }

            dayPrice += currentPrice;
        }

        totalPrice += dayPrice;
        console.log(`Day: ${currentDay} - ${dayPrice.toFixed(2)} leva`);

    }

    console.log(`Total: ${totalPrice.toFixed(2)} leva`);


}
vetParking([5, 2])