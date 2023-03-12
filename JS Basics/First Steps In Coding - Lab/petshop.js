function petshop(input){
    let dogFood = input[0];
    let catFood = input[1];

    let allDogFood = dogFood * 2.50;
    let allCatFood = catFood * 4;

    let finalSum = allDogFood + allCatFood;
     console.log(`${finalSum} lv.`)
}
petshop([ 6 , 1 ]);