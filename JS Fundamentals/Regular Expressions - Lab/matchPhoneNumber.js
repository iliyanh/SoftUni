function matchPhoneNumber(arr){
    let result = []

    let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/g

    for(let i = 0; i< arr.length;i++){
        let num = arr[i];
        let number = num.match(regex)
        result = result.concat(number)
    }

    console.log(result.join(", "));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);