//Object references
var $playButton = document.querySelector('.play');
var $video = document.querySelector('video');
var $currentTime = document.querySelector('.time p:first-child');
var $durationTime = document.querySelector('.time p:last-child');
var $progretionBar = document.querySelector('.progretionBar');
var $volume = document.querySelector('.volume');
var $volumeBar = document.querySelector('.volumeBar');

//Event Listeners
$playButton.addEventListener('click', playStop, false);
$progretionBar.addEventListener('change', progretionBar,false);
$video.addEventListener('timeupdate', timeUpdate, false);
$video.addEventListener('ended', endedVideo, false);
$volume.addEventListener('mouseover', showVolumeAnimation, false);
$volume.addEventListener('mouseout', hideVolumeAnimation, false);

//Functions
function playStop() {
  console.log($video.volume);
  if($video.paused){
    $video.play();
    this.classList.add('pause');
  } else {
    $video.pause();
    this.classList.remove('pause');
  }
}

function progretionBar(){
  var progress = $video.duration * ($progretionBar.value / 100);
  $video.currentTime = progress;
}

function timeUpdate(){
  var progretionTime = $video.currentTime * (100 / $video.duration);
  $progretionBar.value = progretionTime;
  var curMins = Math.floor($video.currentTime / 60);
  var curSecs = Math.floor($video.currentTime - curMins * 60);
  var durMins = Math.floor($video.duration / 60);
  var durSecs = Math.floor($video.duration - durMins * 60);
  if(curSecs < 10){ curSecs = '0'+curSecs; }
  if(durSecs < 10){ durSecs = '0'+durSecs; }
  if(curMins < 10){ curMins = '0'+curMins; }
  if(durMins < 10){ durMins = '0'+durMins; }
  $currentTime.innerHTML = curMins+':'+curSecs;
  $durationTime.innerHTML = durMins+':'+durSecs;
}

function showVolumeAnimation() {
  $volumeBar.classList.add('animateVolumeBar');
}

function hideVolumeAnimation() {
  $volumeBar.classList.remove('animateVolumeBar');
}

function endedVideo() {
  $currentTime.innerHTML = '00:00';
  $durationTime.innerHTML = '00:00';
  $playButton.classList.remove('pause');
  $progretionBar.value = '0';
}
