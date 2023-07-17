function thePyramidOfKingDjoser(base, increment){
    let height = 0;
    let stones = 0;
    let requiredStones = 0;
    let marbleCounter = 0;
    let marble = 0;
    let lapis = 0;
    let requiredMarble = 0;
    let requiredLapis = 0;
    let gold = 0;

    for(let i = base; i >= 1 ; i-=2){
        let wholeLevel = i*i;
        marbleCounter++;
        height++;
        if( i <= 2){
            gold = i*i;
            break;
        }
        if(marbleCounter < 5){
            stones = ((i-2)*(i-2));
            requiredStones += stones;
            marble = (wholeLevel - stones);
            requiredMarble += marble;
        } else if (marbleCounter === 5){
            marbleCounter = 0;
            stones = ((i-2)*(i-2));
            requiredStones += stones;
            lapis = (wholeLevel - stones);
            requiredLapis += lapis;
        }
        if( i <= 2){
            gold = i*i;

        }
    }
    console.log(`Stone required: ${Math.ceil((requiredStones) * increment)}`);
    console.log(`Marble required: ${Math.floor((requiredMarble) * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.floor((requiredLapis) * increment)}`);
    console.log(`Gold required: ${Math.ceil((gold) * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(height* increment)}`);
}
thePyramidOfKingDjoser(23, 0.5);