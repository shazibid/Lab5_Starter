// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornImage = document.querySelector('#expose img');
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const audio = document.querySelector('#expose audio');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', (event) => {
    const horn = event.target.value;
    if (horn === 'select') {
      hornImage.src = 'assets/images/no-image.png';
      hornImage.alt = 'No image selected';
      audio.src = '';
      return;
    }
    hornImage.src = `assets/images/${horn}.svg`;
    hornImage.alt = horn.replace('-', ' ');
    audio.src = `assets/audio/${horn}.mp3`;
  });

  volumeSlider.addEventListener('input', (event) => {
    const value = Number(event.target.value);
    audio.volume = value / 100;

    let level;
    if (value === 0) level = 0;
    else if (value < 33) level = 1;
    else if (value < 67) level = 2;
    else level = 3;

    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  });

  playButton.addEventListener('click', () => {
    if (!audio.src) return;
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
