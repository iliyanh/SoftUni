function assemblyLine(){
    return {
        hasClima(car) {
            car.temp = 21;
            car.tempSettings = 21;

            car.adjustTemp = () => {
                if(car.temp < car.tempSettings){
                    car.temp++;
                } else {
                    car.temp--;
                }
            }
        },
        hasAudio(car) {
            car.currentTrack = {
                name: null,
                artist: null
            }
            car.nowPlaying= () => {
                console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
            }
        },
        hasParktronic(car) {
            car.checkDistance= (distance) => {
                if(distance < 0.1){
                    console.log("Beep! Beep! Beep!");
                } else if ( distance < 0.25){
                    console.log("Beep! Beep!");
                } else if (distance < 0.5){

                } else {
                    console.log("");
                }
            }
        }
    }
}