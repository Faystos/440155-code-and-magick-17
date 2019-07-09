'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


var wizards = [
  {
    name: WIZARD_NAMES[0],
    coatColor: WIZARD_COAT_COLOR[0],
    eyesColor: WIZARD_EYES_COLOR[0]
  },
  {
    name: WIZARD_NAMES[1],
    coatColor: WIZARD_COAT_COLOR[1],
    eyesColor: [1]
  },
  {
    name: WIZARD_NAMES[2],
    coatColor: WIZARD_COAT_COLOR[2],
    eyesColor: [2]
  },
  {
    name: WIZARD_NAMES[3],
    coatColor: WIZARD_COAT_COLOR[3],
    eyesColor: [3]
  }
];

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[getRandomInt(0, 8)] + WIZARD_SURNAME[getRandomInt(0, 7)];
  wizardElement.querySelector('.wizard-coat').style.fill = WIZARD_COAT_COLOR[getRandomInt(0, 5)];
  wizardElement.querySelector('.wizard-eyes').style.fill = WIZARD_EYES_COLOR[getRandomInt(0, 4)];

  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
