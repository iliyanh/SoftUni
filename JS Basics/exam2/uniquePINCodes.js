function uniquePINCodes(input){

    let firstNumberEnd = Number(input[0]);
    let primeNumberEnd = Number(input[1]);
    let thirdNumberEnd = Number(input[2]);
    
    for(let i = 1 ; i <= firstNumberEnd ; i++){
        for(let j = 1 ; j <= primeNumberEnd ; j++){
            for(let k = 1; k <= thirdNumberEnd ; k++){
                if(j === 2 || j === 3 || j === 5 || j === 7){
                    if( i % 2 === 0 && k % 2 === 0){
                        console.log(`${i} ${j} ${k}`);
                    }
                }
            }
        }
    }

}
   
uniquePINCodes(["8",
"2",
"8"])

