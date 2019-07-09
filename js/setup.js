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

var wizards = [];
var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length - 1)] + WIZARD_SURNAME[getRandomInt(0, WIZARD_SURNAME.length - 1)];
  wizardElement.querySelector('.wizard-coat').style.fill = WIZARD_COAT_COLOR[getRandomInt(0, WIZARD_COAT_COLOR.length - 1)];
  wizardElement.querySelector('.wizard-eyes').style.fill = WIZARD_EYES_COLOR[getRandomInt(0, WIZARD_EYES_COLOR.length - 1)];

  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  var wizardSet = {
    name: WIZARD_NAMES[i],
    coatColor: WIZARD_COAT_COLOR[i],
    eyesColor: WIZARD_EYES_COLOR[i]
  };

  fragment.appendChild(renderWizard());
  wizards.push(wizardSet);
}
// wizards[i]
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
