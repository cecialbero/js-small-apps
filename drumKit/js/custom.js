function playSound(e) {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function if no audio
    audio.currentTime = 0; //reset to 0 the current time
    audio.play();
    key.classList.add('playing');
}

function releaseKey(e) {
  var keys = document.querySelectorAll('.key');
  keys.forEach(function(key){
    key.classList.remove('playing');
  });
}

window.addEventListener('keydown', playSound);

window.addEventListener('keyup', releaseKey);
