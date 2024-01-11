function guineaPig(input) {

    let food = input[0] * 1000;
    let hay = input[1] * 1000;
    let cover = input[2] * 1000;
    let weight = input[3] * 1000;
    let hasToGoToStore = false

    for (let i = 1; i <= 30; i++) {
        food -= 300;
        if (i % 2 === 0) {

            let hayNeeded = food * 0.05;
            hay -= hayNeeded;
        }
        if (i % 3 === 0) {

            let coverNeeded = weight / 3;
            cover -= coverNeeded;
        }
        if (food <= 0 || hay <= 0 || cover <= 0) {
            hasToGoToStore = true
            break;
        }


    }

    return hasToGoToStore
        ? "Merry must go to the pet store!"
        : `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`;


}
console.log(guineaPig((["10", "5", "5.2", "1"])));
console.log(guineaPig((["1", "1.5", "3", "1.5"])));
console.log(guineaPig((["9", "5", "5.2", "1"])));