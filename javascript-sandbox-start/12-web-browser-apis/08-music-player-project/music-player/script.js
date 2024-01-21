const musicContainer = document.getElementById('music-container');
const title = document.getElementById('title');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');

// Song titles
const songs = ['hey', 'summer', 'ukulele', 'forbidden-gate'];

// Keep track of song
let songIndex = 0;

// Initially load song
loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    audio.volume = 0.3;
    cover.src = `images/${song}.jpg`;
}

function playSong() {
    musicContainer.classList.add('play');
    play.querySelector('i.fas').classList.remove('fa-play');
    play.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    play.querySelector('i.fas').classList.remove('fa-pause');
    play.querySelector('i.fas').classList.add('fa-play');
    audio.pause();
}

function prevSong() {
    if (songIndex === 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex--;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    if (songIndex === songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex++;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(event) {
    const { duration, currentTime } = event.target;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    if (currentTime === duration) {
        nextSong();
    }
}

function setProgress(event) {
    const width = this.clientWidth;
    const clickX = event.offsetX;

    audio.currentTime = (clickX / width) * audio.duration;
}

// Event listeners
play.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prev.addEventListener('click', prevSong);
next.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);