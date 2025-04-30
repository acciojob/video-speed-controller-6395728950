const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


const video = document.querySelector('.flex');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const volume = document.querySelector('input[name="volume"]');
const playback = document.querySelector('input[name="playbackSpeed"]');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Toggle Play/Pause
function togglePlay() {
  video.paused ? video.play() : video.pause();
}
function updateButton(){
	toggle.textContent = video.paused ?' ►':'❚ ❚ '
}

function skip(){
	video.currentTime+=parseFloat(this.dataset.skip);
}

function handleRangeupdate(){
	video[this.name]=this.value;
}

function handleProgress(){
	const percent = (video.currentTime /video.duration)*100;
	progressFilled.style.flexBasis=`${percent}%`;
}

function scrub(e){
	const scrubTime = (e.offsetX /  progress.offsetWidth) *(video.duration);
	video.currentTime = scrubTime;
}

video.addEventListener("click",togglePlay)
video.addEventListener("play",updateButton)
video.addEventListener("pause",updateButton)
video.addEventListener("timeupdate",handleProgress)
 
skipButtons.forEach(btn => btn.addEventListener('click',skip));
toggle.addEventListener("click",togglePlay);
volume.addEventListener('input',handleRangeupdate);
playback.addEventListener('input',handleRangeupdate);
progress.addEventListener('click',scrub);


