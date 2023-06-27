function sumNumbers(input){

    let end = Number(input[0]);
    let index = 1;
    let sum = 0;
    
 
    while(sum < end){
        let currentnumber = Number(input[index]);
        sum += currentnumber;
        index++;
        if (sum >= end){
            break;
        }
    }
    console.log(sum);

}
sumNumbers(["100",
"10",
"20",
"30",
"40"])






