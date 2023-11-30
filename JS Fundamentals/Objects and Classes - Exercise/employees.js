function employees(arr) {

    class Info {
        constructor(name, personalNumber) {
            this.name = name,
                this.personalNumber = personalNumber
        }
        print() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`)
        }

    }

    for (let el of arr) {
        let name = el
        let personalNumber = el.length;
        let information = new Info(name, personalNumber);

        information.print()
    }




}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
);