const songs = [
    {
        title: "Arere yekada",
        artist: "Manisha Eerabathini and Naresh Iyer",
        src: "songs/arere.mp3",
        cover: "images/image1.jpeg"
    },
    {
        title: "Thean kudika",
        artist: "Pragathi Guruprasad and Teejay Arunasalam",
        src: "songs/thean kudika.mp3",
        cover: "images/image2.jpeg"
    },
    {
        title: "Thee kuruvi",
        artist: "A.R. Rahman, Johnson, Harini, and Mukesh",
        src: "songs/thee kuruvi.mp3",
        cover: "images/image3.jpeg"
    }
];

let index = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const current = document.getElementById("current");
const duration = document.getElementById("duration");
const playBtn = document.querySelector(".play");

loadSong(index);

function loadSong(i){
    title.innerText = songs[i].title;
    artist.innerText = songs[i].artist;
    cover.src = songs[i].cover;
    audio.src = songs[i].src;
}

function playPause(){
    if(audio.paused){
        audio.play();
        playBtn.innerText = "⏸";
    }else{
        audio.pause();
        playBtn.innerText = "▶";
    }
}

function nextSong(){
    index = (index + 1) % songs.length;
    loadSong(index);
    audio.play();
    playBtn.innerText = "⏸";
}

function prevSong(){
    index = (index - 1 + songs.length) % songs.length;
    loadSong(index);
    audio.play();
    playBtn.innerText = "⏸";
}

/* AUTOPLAY NEXT SONG */
audio.addEventListener("ended", nextSong);

/* PROGRESS BAR */
audio.addEventListener("timeupdate", ()=>{
    progress.value = (audio.currentTime / audio.duration) * 100;
    current.innerText = format(audio.currentTime);
    duration.innerText = format(audio.duration);
});

progress.addEventListener("input", ()=>{
    audio.currentTime = (progress.value / 100) * audio.duration;
});

/* VOLUME */
volume.addEventListener("input", ()=>{
    audio.volume = volume.value;
});

function format(time){
    if(isNaN(time)) return "0:00";
    let m = Math.floor(time/60);
    let s = Math.floor(time%60);
    return `${m}:${s<10?"0"+s:s}`;
}