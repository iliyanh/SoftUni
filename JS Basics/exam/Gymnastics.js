function gymnastics(input){

    let country = input[0];
    let type = input[1];
    let difficulty = 0;
    let perform = 0;

    switch(country){
        case "Russia":
            
            if(type === "ribbon"){
                difficulty = 9.100;
                perform = 9.400;
            } else if (type === "hoop"){
                difficulty = 9.300;
                perform = 9.800;
            } else if (type === "rope"){
                difficulty = 9.600;
                perform = 9.000;
            }
            break;
        case "Bulgaria":

            if(type === "ribbon"){
                difficulty = 9.600;
                perform = 9.400;
            } else if (type === "hoop"){
                difficulty = 9.550;
                perform = 9.750;
            } else if (type === "rope"){
                difficulty = 9.500;
                perform = 9.400;
            }
            break;
        case "Italy":

            if(type === "ribbon"){
                difficulty = 9.200;
                perform = 9.500;
            } else if (type === "hoop"){
                difficulty = 9.450;
                perform = 9.350;
            } else if (type === "rope"){
                difficulty = 9.700;
                perform = 9.150;
            }
            break;
    }

    let result = (difficulty + perform).toFixed(3);
    let difference = 20 - result;
    let differenceInPercentage = ((difference / 20) * 100).toFixed(2);

    console.log(`The team of ${country} get ${result} on ${type}.`);
    console.log(`${differenceInPercentage}%`);



}
gymnastics([ "Italy",
"hoop"])
