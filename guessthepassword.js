function password(input){
    let pass1 = input[0];
    let pass2 = "s3cr3t!P@ssw0rd"
    if (pass1 === pass2) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!")
    }
}
password(["s3cr3t!P@ssw0rd"]);