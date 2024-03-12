function filter(string, criteria) {

    let employees = JSON.parse(string);
    let result = []

    if(criteria === "all"){
        result = employees;
    } else {
        const [key, value] = criteria.split("-")
        result = employees.filter(employee => employee[key] === value);
    }
    
    result.forEach((worker, index) => {
        console.log(`${index}. ${worker.first_name} ${worker.last_name} - ${worker.email}`);
    });

}
filter(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
   {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
    'gender-Female');