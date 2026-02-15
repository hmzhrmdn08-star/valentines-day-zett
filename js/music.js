const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");

const title = document.getElementById("songTitle");
const artist = document.getElementById("songArtist");

let isPlaying = false;

// PLAY / PAUSE
playBtn.addEventListener("click", ()=>{

  if(isPlaying){
    audio.pause();
    playBtn.classList.remove("pause");
    playBtn.classList.add("play");
  }else{
    audio.play();
    playBtn.classList.remove("play");
    playBtn.classList.add("pause");
  }

  isPlaying = !isPlaying;
});

const cover = document.getElementById("coverImage");

function changeSong(src, songTitle, songArtist, coverSrc){

  audio.src = src;
  title.innerText = songTitle;
  artist.innerText = songArtist;

  // GANTI COVER
  cover.src = coverSrc;

  audio.play();

  playBtn.classList.remove("play");
  playBtn.classList.add("pause");

  isPlaying = true;
}