//Global variables
var mantraSelector = document.getElementById('input1');
var affirmationSelector = document.getElementById('input2');
var message = document.getElementById('randomMessage');
var receiveMsgBtn = document.getElementById('actionButton');
var image = document.getElementById('meditate');

//Event listeners
receiveMsgBtn.addEventListener('click', renderMessage)

//Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function renderMessage() {
  var mantra = mantras[getRandomIndex(mantras)];
  var affirmation = affirmations[getRandomIndex(affirmations)];
  if(mantraSelector.checked) {
    message.innerText = mantra
  } else if(affirmationSelector.checked) {
    message.innerText = affirmation
  }
  hideImage();
  showMessage();
};

function hideImage() {
  meditate.classList.add('hidden')
};

function showImage() {
  meditate.classList.remove('hidden')
};

function showMessage() {
  randomMessage.classList.remove('hidden')
};

function hideMessage() {
  randomMessage.classList.add('hidden')
};
