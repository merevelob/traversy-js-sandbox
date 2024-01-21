function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!audio) {
        return;
    }
    audio.volume = 0.3;
    audio.currentTime = 0;
    key.classList.add('playing');
    audio.play();

    setTimeout(() => key.classList.remove('playing'), 500);
}

window.addEventListener('keydown', playSound);