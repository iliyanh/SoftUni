function triangleOfNumbers(num){
    
    for(let row = 1; row <= num; row++ ){
        let text = "";
        
        for(let col = 1; col <= row; col++){
            text += row + " ";
        }
        console.log(text);
    }
}
triangleOfNumbers(3)
triangleOfNumbers(5)
triangleOfNumbers(6)