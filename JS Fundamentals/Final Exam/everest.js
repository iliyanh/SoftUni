function everest(data) {

    let regex = /^(?<name>[A-Za-z!@#$?]+)[=](?<length>\d+)[<]{2}(?<code>.+)$/
    let m;
    let regexForName = /[A-Za-z0-9]+/g
    for (let line of data) {
        if(line === "Last note"){
            return;
        }
        if (m = line.match(regex)) {
            m = regex.exec(line)
            let currentName = m.groups.name
            let currentlength = m.groups.length;
            let currentCode = m.groups.code;
            let hillName = currentName.match(regexForName)

            if (Number(currentlength) === currentCode.length) {
                console.log(`Coordinates found! ${hillName.join("")} -> ${currentCode}`);
            } else {
                console.log("Nothing found!");
            }
        } else {
            console.log("Nothing found!");
        }

    }
}

everest(["!@Ma?na?sl!u@=7<<tv58ycb4845",
    "E!ve?rest=.6<<tuvz26",
    "!K@2.,##$=4<<tvnd",
    "!Shiha@pan@gma##9<<tgfgegu67",
    "!###Anna@pur@na##=16<<tv5dekdz8x11ddkc",
    "Last note"]);
    console.log("_______________________________");
everest((["Ka?!#nch@@en@ju##nga@=3<<thfbghvn",
"=9Cho?@#Oyu<<thvb7ydht",
"Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6",
"Dhau??la#gi@ri?!#=3<<bvnfhrtiuy",
"Last note"])
)
