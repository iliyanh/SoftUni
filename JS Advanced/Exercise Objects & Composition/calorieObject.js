function calorieObject(array){

let output = {};

for(let i = 0; i< array.length; i+=2){
    let currentName = array[i];
    let currentCalories = Number(array[i + 1]);

    output[currentName] = currentCalories;
}

return output


}
console.log(calorieObject(['Yoghurt', '48', 'Rise', '138',
'Apple', '52'] ));