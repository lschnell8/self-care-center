//Global variables
var mantraSelector = document.getElementById('input1');
var affirmationSelector = document.getElementById('input2');
var message = document.getElementById('randomMessage');
var receiveMsgBtn = document.getElementById('actionButton');
var logInBtn = document.getElementById('logIn');
var image = document.getElementById('meditate');
var mainPage = document.getElementById('mainPage');
var logInPg = document.getElementById('logInPage');
var inputField = document.getElementById('inputField');
var errorMsg = document.getElementById('inputError');

//Event listeners
receiveMsgBtn.addEventListener('click', renderMessage);
logInBtn.addEventListener('click', logIn);

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

function logIn() {
  if(!inputField.value) {
    showErrorMsg();
  } else {
    showMainPage();
    hideLogInPg();
    insertGreeting();
  }
};

function showErrorMsg() {
  inputError.classList.remove('hidden')
};

function showMainPage() {
  mainPage.classList.remove('hidden')
};

function hideLogInPg() {
logInPg.classList.add('hidden')
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

function insertGreeting() {
  var greeting = `<h2>Welcome, ${inputField.value}!</h2>`
  mainPage.insertAdjacentHTML('afterbegin', greeting)
}
