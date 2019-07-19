'use strict';
var userDialog = document.querySelector('.setup');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {

  var wizard = {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length - 1)],
    surname: WIZARD_SURNAME[getRandomInt(0, WIZARD_SURNAME.length - 1)],
    coatColor: WIZARD_COAT_COLOR[getRandomInt(0, WIZARD_COAT_COLOR.length - 1)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInt(0, WIZARD_EYES_COLOR.length - 1)]
  };

  fragment.appendChild(renderWizard(wizard));

}

similarListElement.appendChild(fragment);


userDialog.querySelector('.setup-similar').classList.remove('hidden');

//  ********************************************************************

// Открываем и закрываем блок настроек персонажа мышкой

var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var inputName = userDialog.querySelector('.setup-user-name');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var handlerClickSetupOpen = function (evt) {
  evt.preventDefault();
  userDialog.classList.remove('hidden');
};

var handlerClickSetupClose = function (evt) {
  evt.preventDefault();
  userDialog.classList.add('hidden');
};

setupOpen.addEventListener('click', handlerClickSetupOpen);
setupClose.addEventListener('click', handlerClickSetupClose);

// Открываем и закрываем блок настроек персонажа клавой

var handlerKeydownSetupOpen = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    userDialog.classList.remove('hidden');
  }
};

var handlerKeydownSetupClose = function (evt) {
  if (inputName === document.activeElement) {
    return;
  } else if (evt.keyCode === ESC_KEYCODE) {
    userDialog.classList.add('hidden');
  }
};


var handlerKeydownSetupClose2 = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    userDialog.classList.add('hidden');
  }
};

setupOpen.addEventListener('keydown', handlerKeydownSetupOpen);
setupClose.addEventListener('keydown', handlerKeydownSetupClose2);
document.addEventListener('keydown', handlerKeydownSetupClose);

// ************************************************************************

// Изменяем цвет fireball «огненный шар»

var setupFireballWrap = userDialog.querySelector('.setup-fireball-wrap');
var COLORSFIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var countPress = 0;

var handlerClickSetupFireball = function (evt) {
  evt.preventDefault();
  setupFireballWrap.style.background = COLORSFIREBALLS[countPress];
  countPress++;
  if (countPress === COLORSFIREBALLS.length) {
    countPress = 0;
  }
};

setupFireballWrap.addEventListener('click', handlerClickSetupFireball);

// ************************************************************************

// Меняем цвет глаз Визарда
var setupWizard = document.querySelector('.setup-wizard');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');

var handlerClickSetupWizardEyes = function (evt) {
  evt.preventDefault();

  wizardEyes.style.fill = WIZARD_EYES_COLOR[countPress];
  countPress++;
  if (countPress === WIZARD_EYES_COLOR.length) {
    countPress = 0;
  }
};

setupWizard.addEventListener('click', handlerClickSetupWizardEyes);
// ************************************************************************

// Меняем цвет плаща произвольным свойством
var wizardCoat = setupWizard.querySelector('.wizard-coat');

var handlerClickSetupWizardCoat = function (evt) {
  evt.preventDefault();
  wizardCoat.style.fill = (WIZARD_COAT_COLOR[getRandomInt(0, WIZARD_COAT_COLOR.length - 1)]);
};

setupWizard.addEventListener('click', handlerClickSetupWizardCoat);

// ************************************************************************
