function race(data){

let names = data.shift().split(", ")
let regexName = /[A-Za-z]/g
let regexNumbers = /\d/g
let obj = {}

for(let name of names ){
    obj[name] = 0;
}

for(let line of data){
    let currentName = line.match(regexName).join("")
    let sum = 0;

    if(obj.hasOwnProperty(currentName)){
        let currentMiles = line.match(regexNumbers)
        for(let num of currentMiles){
            sum += Number(num)
        }
        obj[currentName] += sum
        
    }
}
let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
console.log(`1st place: ${sorted[0][0]}`);
console.log(`2nd place: ${sorted[1][0]}`);
console.log(`3rd place: ${sorted[2][0]}`);


}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']);
