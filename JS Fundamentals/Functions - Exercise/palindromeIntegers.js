function palindromeIntegers(array){
    
    
    for(let i = 0; i < array.length; i++){
        let result = false;
        let numAsString = String(array[i]);
        let buff = "";
            for(let j = numAsString.length - 1 ; j >= 0 ; j--){
                buff += numAsString[j];
            }
            if(buff === numAsString){
                result = true;
            }
            console.log(result);
        }
        

    
}    
       


palindromeIntegers([123,323,421,121]);
console.log("------");
palindromeIntegers([32,2,232,1010]);