function formatGrade(grade){
    let gradeDescription = "";
    let gradeBrackets = "";

    if(grade < 3.00){
        gradeDescription = "Fail (2)"
    } else if (grade < 3.50){
        gradeDescription = `Poor (${grade.toFixed(2)})`
    } else if (grade <4.50){
        gradeDescription = `Good (${grade.toFixed(2)})`
    } else if (grade < 5.50){
        gradeDescription = `Very good (${grade.toFixed(2)})`
    } else if (grade >= 5.50){
        gradeDescription = `Excellent (${grade.toFixed(2)})`
    }
    return gradeDescription
    

    
}  
console.log(formatGrade(3.33));
console.log(formatGrade(4.50));
console.log(formatGrade(2.99));

