const joke = document.querySelector('.joke');
const jokeBtn = document.querySelector('#joke-btn');

function getJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const data = JSON.parse(this.responseText);
                joke.textContent = data.value;
            } else {
                joke.textContent = 'Something went wrong.';
            }
        }
    };
    
    xhr.send();
}

jokeBtn.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', getJoke);