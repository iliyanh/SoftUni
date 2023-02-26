function worldSwimmRecord(input) {
    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let time = Number(input[2]);

    let distanceToTime = distance * time;
    let attemptWithSlow = Math.floor(distance / 15) ;
    let total = distanceToTime + (attemptWithSlow * 12.5) ;

    if (worldRecord > total) {
        console.log(`Yes, he succeeded! The new world record is ${total.toFixed(2)} seconds.`)
    } else {
        diff = Math.abs(worldRecord - total);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }

}
worldSwimmRecord(["55555.67",
"3017",
"5.03"])

