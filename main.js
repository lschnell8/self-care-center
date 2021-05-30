//Global variables
var affirmationSelector = document.getElementById('input2');
var errorMsg = document.getElementById('inputError');
var image = document.getElementById('meditate');
var inputField = document.getElementById('inputField');
var logInBtn = document.getElementById('logIn');
var logInPg = document.getElementById('logInPage');
var mainPage = document.getElementById('mainPage');
var mantraSelector = document.getElementById('input1');
var message = document.getElementById('randomMessage');
var receiveMsgBtn = document.getElementById('actionButton');

//Event listeners
logInBtn.addEventListener('click', logIn);
receiveMsgBtn.addEventListener('click', renderMessage);

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
  hide(image);
  show(message);
};

function logIn() {
  if(!inputField.value) {
    show(errorMsg);
  } else {
    show(mainPage);
    hide(logInPg);
    insertGreeting();
  }
};

//Helper functions
function show(element) {
  element.classList.remove('hidden')
};

function hide(element) {
  element.classList.add('hidden')
};

function insertGreeting() {
  var greeting = `<h2>Welcome, ${inputField.value}!</h2>`
  mainPage.insertAdjacentHTML('afterbegin', greeting)
};
