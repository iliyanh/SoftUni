function companyUsers(input){

let obj= {}

for(let line of input){
    let [company, employeeID] = line.split(" -> ");
    if(!obj[company]){
        obj[company] = new Set()
    }
    obj[company].add(employeeID)
}
let sorted = Object.keys(obj).sort()

for(let company of sorted){
    console.log(`${company}`);
    for(let employee of obj[company]){
        console.log(`-- ${employee}`);
    }
}



}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    );
    companyUsers([
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
        ]
        );