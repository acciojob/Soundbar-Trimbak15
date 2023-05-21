function playSound(soundFile) {
  const audioElement = document.getElementById('audio');
  audioElement.src = `sounds/${soundFile}`;
  audioElement.play();
}

function stopSound() {
  const audioElement = document.getElementById('audio');
  audioElement.pause();
  audioElement.currentTime = 0;
}