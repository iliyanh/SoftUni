function onTime(input){
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);
    let examTime = (examHour * 60) + examMinutes;
    let arrivaltime = (arrivalHour * 60) + arrivalMinutes;
    let diff = Math.abs(examTime - arrivaltime);

    if (examTime < arrivaltime){
    console.log("Late");
        if (diff >= 60){
            let hour = diff / 60;
            let minutes = diff % 60;
            if (minutes < 10){
                console.log(`${Math.floor(hour)}:0${minutes} hours after the start`);
            } else {
                console.log(`${Math.floor(hour)}:${minutes} hours after the start`);
            }
        } else {
            console.log(`${diff} minutes after the start`);
        }
    } else if (examTime === arrivaltime || diff <= 30){
        console.log("On time");
            if (diff >=1 && diff <= 30){
        console.log(`${diff} minutes before the start`);
            }
    }else {
        console.log("Early");
        if (diff >= 60){
            let hour = diff / 60;
            let minutes = diff % 60;
            if (minutes < 10){
                console.log(`${Math.floor(hour)}:0${minutes} hours before the start`);
            } else {
                console.log(`${Math.floor(hour)}:${minutes} hours before the start`);
            }
        } else {
            if (diff < 10){
            console.log(`0${diff} minutes before the start`);
            } else {
                console.log(`${diff} minutes before the start`);  
            }
        }
    }


 
}
onTime(["11",
"30",
"12",
"29"])















