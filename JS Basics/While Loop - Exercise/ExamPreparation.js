function examPreparation(input){
    let noGoodGrades = Number(input[0]);
    let index = 1;
    let lowGrades = 0;
    let averageGrades = 0;
    let excerciseName = input[index];
    let excerciseCounter = 0;
    let name = "";

    while (excerciseName !== "Enough"){
        let Grades = Number(input[index + 1]);
        averageGrades += Grades;
        excerciseCounter++;
        if (Grades <=4){
            lowGrades++;
        }

        if (lowGrades >= noGoodGrades){
            console.log(`You need a break, ${lowGrades} poor grades.`);
            break;
        }
        name = excerciseName
        index += 2;
        excerciseName = input[index];

    }
    if ( excerciseName === "Enough"){
    console.log(`Average score: ${(averageGrades / excerciseCounter).toFixed(2)}`);
    console.log(`Number of problems: ${excerciseCounter}`);
    console.log(`Last problem: ${name}`);
    }


}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


