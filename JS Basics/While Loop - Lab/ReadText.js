function readText(input){

    let string = input[0];
    let index = 0;

    while(string !== "Stop"){
        console.log(string);
        index++;
        string = input[index];
    }

}
readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])

