function passwordValidator(input) {
    let validateLength = charLength(input);
    let validateSpecialChar = validateTextForSpecialChar(input);
    let validateTwoDigits = checkTextForAtleastTwoDigits(input)
    print(validateLength, validateSpecialChar, validateTwoDigits)

    function charLength(text) {
        if (text.length > 5 && text.length < 11) {
            return true
        }
    }

    function validateTextForSpecialChar(text) {
        for (let el of text) {
            let num = el.charCodeAt(0)
            let lowerChar = checkTextForLowerCase(num)
            let upperChar = checkTextForUpperCase(num)
            let checkForNumber = checkTextForNumber(num)
            if (!lowerChar && !upperChar && !checkForNumber) {
                return false
            }

        }
        return true
    }

    function checkTextForLowerCase(num) {
        if (num >= 97 && num <= 122) {
            return true
        }
        return false
    }

    function checkTextForUpperCase(num) {
        if (num >= 65 && num <= 90) {
            return true
        }
        return false
    }
    function checkTextForNumber(num) {
        if (num >= 48 && num <= 57) {
            return true
        }
        return false
    }
    function checkTextForAtleastTwoDigits(text) {
        let counter = 0;

        for (let el of text) {
            let currentdigit = checkTextForNumber(el.charCodeAt(0))

            if (currentdigit) {
                counter++
            }
            if (counter >= 2) {
                return true
            }
        }

    }
    function print(charLength, specialChar, twoDigits) {
        if (!charLength) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!specialChar) {
            console.log("Password must consist only of letters and digits");
        }
        if (!twoDigits) {
            console.log("Password must have at least 2 digits");
        }
        if (charLength && specialChar && twoDigits) {
            console.log("Password is valid");
        }
    }

}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
