function moving(input){

    let width = Number(input[0]);
    let length = Number(input[1]);
    let hight = Number(input[2]);
    let cubicMeters = width * length * hight;
    let index = 3;
    let boxes = input[index];
    let totalBoxes = 0;

    while (boxes !== "Done"){
        boxes = Number(input[index]);
        totalBoxes += boxes;
            if (totalBoxes > cubicMeters){
                console.log(`No more free space! You need ${totalBoxes - cubicMeters} Cubic meters more.`);
                break;
            }
            index++;
            boxes = input[index];
    }
    if (boxes === "Done" && totalBoxes <= cubicMeters){
        console.log(`${cubicMeters - totalBoxes} Cubic meters left.`);
    }

}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

