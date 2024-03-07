function rectangle(width, height, color){

        let leftside = color.substring(0, 1).toUpperCase();
        let rightSide = color.substring(1);
        color = leftside + rightSide;
        
    let output = {
        width: Number(width),
        height: Number(height),
        color: color,

        calcArea() {
            return this.width * this.height;
        }

    }
    return output
}
rectangle(4, 5, 'red')