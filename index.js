window.addEventListener("keydown", playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;   // Set the audio's currentTime to 0 to rewind it to the start
  audio.play();
}

const keys= Array.from(document.querySelectorAll('.key'));
keys.forEach(key=>key.addEventListener('transitionend',removeTransition));

function removeTransition(e){
    if(e.propertyName!=='transform') return;  //if its not transform skip
    this.classList.remove('playing');
}
