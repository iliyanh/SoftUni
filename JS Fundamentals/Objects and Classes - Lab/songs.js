function songs(input){

class Song{
    constructor(type, name, time){
        this.type = type;
        this.name = name;
        this. time = time;
    }
}

let numberOfSongs = input.shift();
let typeOfSongToBePrinted = input.pop();
let songs = [];

for(let i = 0; i < numberOfSongs; i++){
    let [type, name, time ] = input[i].split("_");
    let track = new Song(type, name, time);

    songs.push(track)
    
    
}


if(typeOfSongToBePrinted === "all"){
    songs.forEach((i) => console.log(i.name));
} else {
    let filtered = songs.filter((i) => i.type === typeOfSongToBePrinted);
    filtered.forEach((i) => console.log(i.name));
}





}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );
    
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    );
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    );
    