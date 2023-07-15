function login(input){
    let counter = 0;
    let userName = input[0];
    let password = "";
    let index = 1;
    let currentPassword = input[index];
    
    for( let i = userName.length - 1; i >= 0 ; i--){
        password += userName[i];
    }
    
    while (currentPassword !== password){
        counter++;
        if(counter <= 3){
            console.log("Incorrect password. Try again.");
        } else {
            console.log(`User ${userName} blocked!`);
            break;
        }
        
        index++;
        currentPassword = input[index];
    }

    if(currentPassword === password){
        console.log(`User ${userName} logged in.`);
    
    }
   

}
login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);