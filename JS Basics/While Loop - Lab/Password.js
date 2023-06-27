function password(input){

    let username = input[0];
    let password = input[1];
    let currentPassword = 0;
    let index = 2;

    while(currentPassword !== password){
        currentPassword = input[index];
        index++;
        if ( currentPassword === password){
            console.log("Welcome " + username + "!");
        }
    }

}
password(["Gosho",
"secret",
"secret"])

