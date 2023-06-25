function steps(input){

    let stepsGoal = 10000;
    let index = 0;
    let steps = input[index];
    let totalSteps = 0;

    while (steps !== "Going home"){
        steps = Number(input[index]);
        totalSteps += steps;
        index++;
        if (totalSteps >= stepsGoal){
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - stepsGoal} steps over the goal!`);
            break;
        }
        steps = input[index];
    }
    if (steps === "Going home"){
        index++;
        steps = Number(input[index]);
        totalSteps += steps;
        if (totalSteps >= stepsGoal){
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - stepsGoal} steps over the goal!`);
        } else {
            console.log(`${stepsGoal - totalSteps} more steps to reach goal.`);
        }
    }


}
steps(["125",
"250",
"4000",
"30",
"2678",
"4682"])



