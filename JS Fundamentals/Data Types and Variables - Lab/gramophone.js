function gramophone(bandName, albumName, songName){


    let sum = (albumName.length * bandName.length) * songName.length / 2;
    let rotations = sum / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
gramophone('Rammstein', 'Sehnsucht', 'Engel')