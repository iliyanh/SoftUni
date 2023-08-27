function triplesOfLatinLetters(num){

    let result = "";

    for(let i = 0; i < num; i++){
        let a = String.fromCharCode(97 + i);
        for(let j = 0; j < num; j++){
            let b = String.fromCharCode(97 + j);
            for(let k = 0; k < num; k++){
                let c = String.fromCharCode(97 + k);
                result = `${a}${b}${c}`;
                console.log(result);
                
            }
            
        }
    }


}
triplesOfLatinLetters(3);

//console.log(String.fromCharCode(97 + i));