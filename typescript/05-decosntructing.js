var audioSystem1 = {
    audioVolume: 90,
    song: "one",
    detailts: {
        author: "Ed Sheeran",
        year: 2015,
    }
};
var song = "Savage daughter";
var another = audioSystem1.song, detailts = audioSystem1.detailts;
var author = detailts.author;
console.log("Song deconstructed: ", song);
console.log("Song altered: ", another);
console.log("Sin deconstruct details: ", audioSystem1.detailts);
console.log("Deconstructing details author: ", author);
