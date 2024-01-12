function treasureHunt(array) {

    let treasure = array.shift().split("|")
    let index = 0;
    let commands = array.shift().split(" ");
    let command = commands.shift()
    let sum = 0;
    let elementCounter = 0;


    while (command !== "Yohoho!") {

        switch (command) {
            case "Loot":
                for (let el of commands) {
                    if (!treasure.includes(el)) {
                        treasure.unshift(el)
                    }
                }
                break;
            case "Drop":
                commands = Number(commands);
                if (commands < 0|| commands > treasure.length - 1) {
                    break;
                }
                let treasureToBePushed = treasure[commands];
                treasure.splice(commands, 1)
                treasure.push(treasureToBePushed)
                break;

            case "Steal":
                commands = Number(commands);
                let elements = treasure.splice(-commands)
                console.log(elements.join(", "));

                break;
        }
        commands = array.shift().split(" ");
        command = commands.shift()


    }
    if (treasure.length === 0) {
        return "Failed treasure hunt."
    }
    for (let j of treasure) {
        sum += j.length;
        elementCounter++
    }
    return `Average treasure gain: ${(sum / elementCounter).toFixed(2)} pirate credits.`;


}
console.log(treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
));
console.log(treasureHunt((["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
));