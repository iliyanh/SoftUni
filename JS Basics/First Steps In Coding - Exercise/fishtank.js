function fishTank(input){
    let long = Number(input[0]);
    let wide = Number(input[1]);
    let high = Number(input[2]);

    let volume = long * wide * high;
    let volumeInLitres = volume / 1000;

    let accessories = volumeInLitres - (volumeInLitres * 0.17);
    console.log(accessories);
}
fishTank([85, 75, 47, 17])