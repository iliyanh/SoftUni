function muOnline(input){

    let arr = input.split("|");
    let health = 100;
    let bitcoins = 0;
    let rooms = 0;

    for(let i = 0; i < arr.length; i++){
        let commands = arr[i].split(" ");
        let command = commands[0];
        let number = Number(commands[1]);
        rooms++
        if(command === "potion"){
            if(health + number >= 100){
                number = 100 - health;
            }
            health += number;

            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if(command === "chest"){
            let CurrentBitcoinsFound = number
            bitcoins += number;
            console.log(`You found ${CurrentBitcoinsFound} bitcoins.`);
        } else {
            health -= number;
            if(health > 0){
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${rooms}`);
                return
            }

        }

    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);


}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
console.log("------------");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");