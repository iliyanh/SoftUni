function lunchbreak(input){
    let name = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let timeForLunch = breakTime / 8;
    let rest = breakTime / 4;
    
    let timeLeft = breakTime - timeForLunch - rest;
    let diff = (timeLeft - episodeTime);

    if (timeLeft >= episodeTime){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(diff)} minutes free time.`)
    } else {
    diff = Math.abs(timeLeft - episodeTime);
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(diff)} more minutes.`)
    }    
}
lunchbreak(["Game of Thrones",
"60",
"96"])
