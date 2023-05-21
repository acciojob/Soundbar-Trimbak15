//your JS code here. If required.
function playSound(soundFile) {
  const audio = new Audio(`sounds/${soundFile}`);
  audio.play();
}

function stopSound() {
  const audioElements = document.getElementsByTagName('audio');
  for (let i = 0; i < audioElements.length; i++) {
    audioElements[i].pause();
    audioElements[i].currentTime = 0;
  }
}