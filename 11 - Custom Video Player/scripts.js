//Get our elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progess');
const progressBar = player.querySelector('.progess__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


//Build our function

function togglePlay() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    if(this.paused) {
        toggle.textContent = '►' ;
    } else {
        toggle.textContent = '❚ ❚' ;
    }
}

//Hook up the event to the eventlistener
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);