function warriorQuest(data){

let skill = data.shift();

for(let line of data){
    let tokens = line.split(" ");
    let command = tokens[0];

    if(command === "Target"){
        command = command + " " + tokens[1];
    }
    if(command === "For"){
        command = command + " " + tokens[1];
    }
    
    switch(command){
        case "GladiatorStance":{
            skill = skill.toUpperCase();
            console.log(skill);
            break;
        }
        case "DefensiveStance":{
            skill = skill.toLowerCase();
            console.log(skill);
            break;
        }
        case "Dispel":{
            let index = Number(tokens[1]);
            let letter = tokens[2];
            if(index >= 0 || index < skill.length){
                let leftSide = skill.substring(0, index);
                let rightSide = skill.substring(index + 1);
                skill = leftSide + letter + rightSide;
                console.log("Success!");
            } else {
                console.log("Dispel too weak.");
            }
            break;
        }
        case "Target Change":{
            let firstSubstring = tokens[2];
            let secondSubstring = tokens[3];

            if(skill.includes(firstSubstring)){
                while(skill.includes(firstSubstring)){
                    skill = skill.replace(firstSubstring, secondSubstring);
                }
                console.log(skill);
            } else {
                console.log(skill);
            }
            break;
        }
        case "Target Remove":{
            let substring = tokens[2];
            if(skill.includes(substring)){
                skill= skill.replace(substring, "");
                console.log(skill);
            } else {
                break;
            }
            break;
        }
        case "For Azeroth":{
            return
        }
    }
    if(command !== "GladiatorStance" && command !== "DefensiveStance" && command !== "Dispel" && command !== "Target Change" && command !== "Target Remove" && command !== "Azeroth" ){
        console.log("Command doesn't exist!");
        break;
    }
}



}
/*warriorQuest((["fr1c710n",
"GladiatorStance",
"Dispel 2 I",
"Dispel 4 T",
"Target Change RICTION riction",
"For Azeroth"])
);*/
console.log("-------------------");
warriorQuest((["DYN4MICNIC",
"Target Remove NIC",
"Dispel 3 A",
"DefensiveStance",
"Target Change d D",
"target change D d",
"For Azeroth"])
)
console.log("-------------------");
warriorQuest((["TR1GG3R",
"Dispel 2 I",
"Dispel 5 E",
"For Azeroth"])
)