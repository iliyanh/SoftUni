function figuresArea(input){
    let type = input[0];
    
    if (type == "square") {
        let a = input[1];
        let area = a * a;
        console.log(area);
    } else if (type == "rectangle") {
        let a = input[1];
        let h = input[2];
        let area = a * h;
        console.log(area);
    } else if (type == "circle") {
        let r = input[1];
        let area = Math.PI * Math.pow(r, 2);
        console.log(area);
    } else if (type == "triangle") {
        let h = input[1];
        let b = input[2];
        let area = h * b / 2;
        console.log(area);
    }
}
figuresArea(["rectangle", 5, 10]);