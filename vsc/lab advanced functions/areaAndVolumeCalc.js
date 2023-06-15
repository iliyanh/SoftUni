function solve(area, vol, input) {

    let object = JSON.parse(input);
    let output = [];
    for (const obj of object) {
        let areaValue = area.call(obj);
        let volume = vol.call(obj);
        let curentObj = {
            area: areaValue,
            volume: volume
        }
        output.push(curentObj)
    }
    return output

}
console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`))

    function area() {
        return Math.abs(this.x * this.y)
    }

    function vol() {
        return Math.abs(this.x * this.y * this.z)
    }
