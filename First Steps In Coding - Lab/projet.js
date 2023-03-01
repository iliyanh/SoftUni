function projects(input){
    let name = input[0];
    let projectsNumber = input[1];
    let time = projectsNumber * 3;

    let result = `The architect ${name} will need ${time} hours to complete ${projectsNumber} project/s.`
    
    console.log(result)
}
projects(["Sanya", "9"])