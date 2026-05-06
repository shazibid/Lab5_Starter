// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const faceImage = document.querySelector('#explore img');
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    }
  }

  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  talkButton.addEventListener('click', () => {
    const text = textArea.value;
    const selectedVoiceName = voiceSelect.value;
    if (!text || selectedVoiceName === 'select') return;

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices.find((v) => v.name === selectedVoiceName);
    if (selectedVoice) utterance.voice = selectedVoice;

    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Smiling face with open mouth';
    });

    utterance.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    });

    synth.speak(utterance);
  });
}
