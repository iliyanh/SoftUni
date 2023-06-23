function building(input) {

    let levels = Number(input[0]);
    let rooms = Number(input[1]);
    

    for (let i = levels; i > 0; i--) {

        let floorType = "";

        if (i === levels){
            floorType = "L";
        } else if( i % 2 === 0){
            floorType = "O";
        } else {
            floorType = "A";
        }
 
        let floor = "";

        for(let j = 0; j < rooms; j++){
            floor = floor + `${floorType}${i}${j} `
        }
        
        console.log(floor);


    }


}
building(["6", "4"]);