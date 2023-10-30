function meetings(input){

    let obj = {};

    for(let line of input){
        let [day, name] = line.split(" ");
        if(obj.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            obj[day] = name;
        }
    }
    for(let key in obj){
        console.log(`${key} -> ${obj[key]}`);
    }
    


}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);
meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);