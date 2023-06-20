function trekkingMania(input){

    let groups = Number(input[0]);
    let totalPeople = 0;
    let index = 1;
    let musala = 0;
    let monblan = 0;
    let kilim = 0;
    let k2 = 0;
    let everest = 0;

    for ( let i = 1 ; i <= groups ; i++){
        let people = Number(input[index]);
        totalPeople += people;

        if (people < 6){
            musala += people;
        } else if ( people < 13){
            monblan += people;
        } else if ( people < 26) {
            kilim += people;
        } else if ( people < 41) {
            k2 += people;
        } else if (people > 40) {
            everest += people;
        }
        index++;

    }
    console.log(`${(musala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(monblan / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kilim / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / totalPeople * 100).toFixed(2)}%`);


}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])


