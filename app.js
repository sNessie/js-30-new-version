'use strict';
    document.addEventListener('DOMContentLoaded', function() {
const keyDivs = document.querySelectorAll('[data-key]');
const musicList = {
  a: "sound/clap.wav",
  s: "sound/hihat.wav",
  d: "sound/kick.wav",
  f: "sound/openhat.wav",
  g: "sound/boom.wav",
  h: "sound/ride.wav",
  j: "sound/snare.wav",
  k: "sound/tom.wav",
  l: "sound/tink.wav"
}
const player = document.getElementById('player');

function keyDownSound(e) {
      for (var i=0; i <keyDivs.length; i++){
        if (keyDivs[i].dataset.key == e.key){
          keyDivs[i].classList.add('klick');
          player.src = musicList[e.key];
          player.play();
              }
}};

function keyUpSound(e) {
  for (var i=0; i <keyDivs.length; i++){
    if (keyDivs[i].dataset.key == e.key){
      keyDivs[i].classList.remove('klick');
    }
  }
};



document.addEventListener("keydown", keyDownSound);
document.addEventListener("keyup", keyUpSound);


























    });
