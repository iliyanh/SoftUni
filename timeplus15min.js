function timePlusMin(input){
    let h = Number(input[0]);
    let m = Number(input[1]);
    
    let time = h * 60 + m + 15;
    let totalh = Math.floor(time / 60);
    let totalm = Math.ceil( time % 60);

    if (totalh > 23) {
        totalh = 0;
    }
    if (totalm < 10) {
        console.log(`${totalh}:0${totalm}`);
    } else {
        console.log(`${totalh}:${totalm}`);
    }
  
}
timePlusMin(["12", "49"])