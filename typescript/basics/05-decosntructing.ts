interface AudioSystem {
    audioVolume: number;
    songDuration?: Float32Array;
    song: string;
    detailts : Details
}

interface Details{
    author: string;
    year: number;
}


const audioSystem1: AudioSystem = {
    audioVolume: 90,
    song: "one",
    detailts : {
        author: "Ed Sheeran",
        year: 2015,
    }
}

const song = "Savage daughter"
const { song:another, detailts} = audioSystem1;
const {author} =  detailts;
console.log("Song deconstructed: " , song ) 
console.log("Song altered: " ,another ) 
console.log("Sin deconstruct details: ", audioSystem1.detailts)
console.log("Deconstructing details author: ", author)
