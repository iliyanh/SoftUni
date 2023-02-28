function hotelRoom(input){
    let month = input[0];
    let days = Number(input[1]);
    let studio = 0;
    let flat = 0;

    switch(month){
        case "May":
        case "October":
            studio = 50;
            flat = 65;
                if (days > 7 && days <= 14){
                    studio = studio * 0.95;
                } else if (days > 14){
                    studio = studio * 0.70;
                    flat = flat * 0.90;
                }
            break;
        case "June":
        case "September":
            studio = 75.20;
            flat = 68.70;
                if (days > 14){
                    studio = studio * 0.80;
                    flat = flat * 0.90;
                }
            break;
        case "July":
        case "August":
            studio = 76;
            flat = 77;
                if(days > 14){
                    flat = flat * 0.90;
                }
            break;
    }


    console.log(`Apartment: ${(flat * days).toFixed(2)} lv.`);
    console.log(`Studio: ${(studio * days).toFixed(2)} lv.`);
}
hotelRoom(["August",
"20"])


