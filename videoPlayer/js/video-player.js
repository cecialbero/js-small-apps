var videoPlayer = function() {
  //Object references
  var $playButton = document.querySelector('.play');
  var $video = document.querySelector('video');
  var $currentTime = document.querySelector('.time p:first-child');
  var $durationTime = document.querySelector('.time p:last-child');
  var $progretionBar = document.querySelector('.progretionBar');
  var $volume = document.querySelector('.volume');
  var $volumeBar = document.querySelector('.volumeBar');
  var $volumeIcon = document.querySelector('.volume .fas');

  //Event Listeners
  $playButton.addEventListener('click', playStop, false);
  $progretionBar.addEventListener('change', updateProgretion,false);
  $video.addEventListener('timeupdate', timeUpdate, false);
  $video.addEventListener('ended', endedVideo, false);
  $video.addEventListener('click', pauseVideo, false);
  $volumeBar.addEventListener('change', updateVolume, false);
  $volume.addEventListener('mouseover', showVolumeAnimation, false);
  $volume.addEventListener('mouseout', hideVolumeAnimation, false);
  $volumeIcon.addEventListener('click', muteVolume, false);

  //PLAY STOP BUTTON
  function playStop() {
    if($video.paused){
      $video.play();
      $playButton.classList.add('pause');
    } else {
      $video.pause();
      $playButton.classList.remove('pause');
    }
  }

  //PROGRESS BAR
  function updateProgretion(){
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

  //VOLUME
  function updateVolume(){
    $video.volume = $volumeBar.value;

    if($volumeBar.value == 0 || $video.volume == 0) {
      $volumeIcon.classList.add('fa-volume-mute');
      $volumeIcon.classList.remove('fa-volume-up');
    } else {
      $volumeIcon.classList.remove('fa-volume-mute');
      $volumeIcon.classList.add('fa-volume-up');
    }
  }

  function muteVolume () {
    if(this.classList.contains('fa-volume-mute')) {
      $video.volume = 1;
      $volumeBar.value = 1;
      this.classList.remove('fa-volume-mute');
      this.classList.add('fa-volume-up');
    } else {
      $video.volume = 0;
      $volumeBar.value = 0;
      this.classList.add('fa-volume-mute');
      this.classList.remove('fa-volume-up');
    }
  }

  function showVolumeAnimation() {
    $volumeBar.classList.add('animateVolumeBar');
  }

  function hideVolumeAnimation() {
    $volumeBar.classList.remove('animateVolumeBar');
  }

  //STOP VIDEO ON CLICK
  function pauseVideo() {
    playStop();
  }

  //ENDED VIDEO
  function endedVideo() {
    $currentTime.innerHTML = '00:00';
    $durationTime.innerHTML = '00:00';
    $playButton.classList.remove('pause');
    $progretionBar.value = '0';
  }
}();
