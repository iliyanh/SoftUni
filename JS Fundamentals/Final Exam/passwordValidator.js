function passwordValidator(data){
    function passwordLength(text) {
        if (text.length > 7 ) {
            return true
        }
    }
    function checkTextForLowerCase(text) {
        for(let el of text){
            let num = el.charCodeAt(0)
        if (num >= 97 && num <= 122) {
            return true
        }
    }
    return false
    }
    function checkTextForUpperCase(text) {
        for(let el of text){
            let num = el.charCodeAt(0)
            if (num >= 65 && num <= 90) {
                return true
            }
        }
        return false
    }
    function checkTextForNumber(text) {
        for(let el of text){
            let num = el.charCodeAt(0)
        if (num >= 48 && num <= 57) {
            return true
        }
    }
    return false
    }
    function checkTextForUnderScore(text){
        for(let el of text){
            let num = el.charCodeAt(0)
        if(num === 95){
            return true
        }
    }
    return false
    }
    function validateText(text) {
        
            let lowerChar = checkTextForLowerCase(text)
            let upperChar = checkTextForUpperCase(text)
            let checkForNumber = checkTextForNumber(text)
            let checkForUnderScore = checkTextForUnderScore(text)
            if (!lowerChar && !upperChar && !checkForNumber && !checkForUnderScore) {
                return false
            }

        
        return true
    }

let password = data.shift();

for(let line of data){
    let tokens = line.split(" ");
    let command = tokens[0];

    if(command === "Make"){
        let secondCommand = tokens[1];
        command = command + " " + secondCommand;
    }

    switch(command){
        case "Make Upper":{
            let index = tokens[2];
            let charToBeModified = password[index]
            let currentChar = password[index].toUpperCase()
            password = password.replace(charToBeModified, currentChar)
            console.log(password);
            break;
        }
        case "Make Lower":{
            let index = tokens[2];
            let charToBeModified = password[index]
            let currentChar = password[index].toLowerCase()
            password = password.replace(charToBeModified, currentChar)
            console.log(password);
            break;
        }
        case "Insert":{
            let index = Number(tokens[1]);
            if(index <= 0 && index >= password.length){
                break;
            }
            let charToBeAdded = tokens[2];
            let leftSide = password.substring(0, index);
            let rightSide = password.substring(index);
            password = leftSide + charToBeAdded + rightSide;
            console.log(password);
            break;
        }
        case "Replace":{
            let charToBeReplaced = tokens[1];
            let value = Number(tokens[2]);
            let asciiValue = charToBeReplaced.charCodeAt()
            let sum = asciiValue + value ;
            let char = String.fromCharCode(sum);
            while(password.includes(charToBeReplaced)){
                password = password.replace(charToBeReplaced, char);
            }
            console.log(password);
            break;
        }
        case "Validation":{
            let validateLength = passwordLength(password);
            let validateString = validateText(password);
            let validateUpper = checkTextForUpperCase(password)
            let validateLower = checkTextForLowerCase(password);
            let validateDigit = checkTextForNumber(password);
            if (!validateLength) {
                console.log("Password must be at least 8 characters long!");
            }
            if(!validateString){
                console.log("Password must consist only of letters, digits and _!");
            }
            if(!validateUpper) {
                console.log("Password must consist at least one uppercase letter!");
            }
            if(!validateLower){
                console.log("Password must consist at least one lowercase letter!");
            }
            if(!validateDigit) {
                console.log("Password must consist at least one digit!");
            }
            
            
        }
        case "Complete":

    }
}


}
/*
passwordValidator((['invalidpassword*',
'Add 2 p',
'Replace i -50',
'Replace * 10',
'Make Upper 2',
'Validation',
'Complete'])
);*/
passwordValidator(['123456789',
'Insert 3 R',
'Replace 5 15',
'Validation',
'Make Lower 3',
'Complete'])
