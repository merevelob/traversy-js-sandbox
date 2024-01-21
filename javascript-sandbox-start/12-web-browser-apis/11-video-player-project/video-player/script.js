// Variables
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Functions
function playPause() {
    if (!video.paused) {
        pauseVideo();
    } else {
        playVideo();
    }
}

function playVideo() {
    play.querySelector('i.fa').classList.remove('fa-play');
    play.querySelector('i.fa').classList.add('fa-pause');
    video.play();
}

function pauseVideo() {
    play.querySelector('i.fa').classList.remove('fa-pause');
    play.querySelector('i.fa').classList.add('fa-play');
    video.pause();
}

function stopVideo() {
    pauseVideo();
    video.currentTime = 0;
}

function setProgress(event) {
    const pos = event.target.value;
    video.currentTime = video.duration * (pos / 100);
    updateTime(video.currentTime);
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
    if (video.currentTime === video.duration) {
        stopVideo();
    }
    updateTime(video.currentTime);
}

function updateTime(current) {
    const seconds = Math.trunc(current);
    timestamp.innerText = `00:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Event listeners
play.addEventListener('click', playPause);
video.addEventListener('click', playPause);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setProgress);
video.addEventListener('timeupdate', updateProgress);