function schoolGrades(input){
let obj = {}


for(let line of input){
    let tokens = line.split(" ");
    let name = tokens.shift();
    let grades = tokens.map(x => Number(x))
    
    if(!obj[name]){
        obj[name] = []
    }

    obj[name] = obj[name].concat(grades)
    
}
for(let name in obj){
    let sum= 0;

    for(let grades of obj[name]){
        sum += grades;

    }
    let avarage = sum / obj[name].length;
    
    obj[name] = avarage;
}
let entries = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

for (let [key, value] of entries) {
    console.log(`${key}: ${value.toFixed(2)}`);
}



}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);