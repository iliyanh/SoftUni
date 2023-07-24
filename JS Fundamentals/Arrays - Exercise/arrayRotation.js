function arrayRotations(array, rotations) {


    for (let i = 1; i <= rotations; i++) {
        array.push(array[0]);
        array.shift();
    }
    console.log(array.join(" "));

}
arrayRotations([51, 47, 32, 61, 21], 2);
arrayRotations([32, 21, 61, 1], 4);
arrayRotations([2, 4, 15, 31], 5);