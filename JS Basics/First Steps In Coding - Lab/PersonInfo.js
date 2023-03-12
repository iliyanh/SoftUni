function getPersonInfo(input){
    // read the input
    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let town = input [3];
    // get the result
    let result = `You are ${firstName} ${lastName}, a ${age}- years from town ${town}`
    //log
    console.log(result)
}

getPersonInfo(["Iliyan", "Hadzhiev", 28, "Plovdiv"]);