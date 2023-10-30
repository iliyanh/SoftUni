function addressBook(arr) {
    let obj = {};

    for (let line of arr) {
        let [key, value] = line.split(":");
        obj[key] = value;
    }

    let entries = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }

}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);