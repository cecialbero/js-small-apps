window.addEventListener('keydown', playSound);

function playSound(e) {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function if no audio
    audio.currentTime = 0; //reset to 0 the current time
    audio.play();
    key.classList.add('play');
    audio.onended = function() {
        alert("The audio has ended");
    };
}
