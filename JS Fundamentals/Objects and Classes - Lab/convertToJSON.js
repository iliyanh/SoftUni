function convertToJSON(name, lastName, hairColour){


    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColour,
    }

    console.log(JSON.stringify(person));
}
convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');