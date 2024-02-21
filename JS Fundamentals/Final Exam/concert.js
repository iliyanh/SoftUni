function concert(data){
let bands = new Map();
let time = new Map()
let totalTime = 0;

for(let line of data){
    if(line === "Start"){
        break;
    }
    let tokens = line.split("; ");
    let command = tokens[0];
    

    switch(command){
        case "Add":{
            let bandName = tokens[1];
            let toks = tokens[2]
            let currentmembers = toks.split(",");
            
            if (!bands.has(bandName)) { 
                bands.set(bandName, currentmembers);
                
            } else {
                let band = map.get(townName)
                for(let member of currentmembers){

                    if(!band.members.has(member){
                        band.members += member
                    }
                }

                this.bandName.members
            }
            break;
            
        }
        case "Play":{
            let times = Number(tokens[2]);
            let bandName = tokens[1];
            totalTime += time
            if (!time.has(bandName)) {
                time.set(bandName, times);
              } else {
                bands.set(bandName, )
              }
              
        }
    }

}
}
concert((["Play; The Beatles; 2584",
"Add; The Beatles; John Lennon, George Harrison, Ringo Starr",
"Add; The Beatles; Paul McCartney, George Harrison",
"Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards",
"Play; The Rolling Stones; 4239",
"Start!"])
);