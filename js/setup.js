'use strict';

(function () {

  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  window.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

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
      name: window.data.WIZARD_NAMES[window.getRandomInt(0, window.data.WIZARD_NAMES.length - 1)],
      surname: window.data.WIZARD_SURNAME[window.getRandomInt(0, window.data.WIZARD_SURNAME.length - 1)],
      coatColor: window.data.WIZARD_COAT_COLOR[window.getRandomInt(0, window.data.WIZARD_COAT_COLOR.length - 1)],
      eyesColor: window.data.WIZARD_EYES_COLOR[window.getRandomInt(0, window.data.WIZARD_EYES_COLOR.length - 1)]
    };

    fragment.appendChild(renderWizard(wizard));

  }

  window.data.similarListElement.appendChild(fragment);


  window.data.userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();


//  ********************************************************************

// Открываем и закрываем блок настроек персонажа мышкой
(function () {

  var handlerClickSetupOpen = function (evt) {
    evt.preventDefault();
    window.data.userDialog.classList.remove('hidden');
  };

  var handlerClickSetupClose = function (evt) {
    evt.preventDefault();
    window.data.userDialog.classList.add('hidden');
    window.data.userDialog.style.left = window.data.defCoordsY;
    window.data.userDialog.style.top = window.data.defCoordsX;
  };

  window.data.setupOpen.addEventListener('click', handlerClickSetupOpen);
  window.data.setupClose.addEventListener('click', handlerClickSetupClose);

  // Открываем и закрываем блок настроек персонажа клавой

  var handlerKeydownSetupOpen = function (evt) {
    if (evt.keyCode === window.data.ENTER_KEYCODE) {
      window.data.userDialog.classList.remove('hidden');
    }
  };

  var handlerKeydownSetupClose = function (evt) {
    if (window.data.inputName === document.activeElement) {
      return;
    } else if (evt.keyCode === window.data.ESC_KEYCODE) {
      window.data.userDialog.classList.add('hidden');
    }
  };

  var handlerKeydownSetupClose2 = function (evt) {
    if (evt.keyCode === window.data.ENTER_KEYCODE) {
      window.data.userDialog.classList.add('hidden');
    }
  };

  window.data.setupOpen.addEventListener('keydown', handlerKeydownSetupOpen);
  window.data.setupClose.addEventListener('keydown', handlerKeydownSetupClose2);
  document.addEventListener('keydown', handlerKeydownSetupClose);
})();
// ************************************************************************

// Изменяем цвет fireball «огненный шар»
(function () {
  // var COLORSFIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var handlerClickSetupFireball = function (evt) {
    evt.preventDefault();
    window.data.setupFireballWrap.style.background = window.data.COLORSFIREBALLS[window.data.countPress];
    window.data.countPress++;
    if (window.data.countPress === window.data.COLORSFIREBALLS.length) {
      window.data.countPress = 0;
    }
  };

  window.data.setupFireballWrap.addEventListener('click', handlerClickSetupFireball);
})();
// ************************************************************************

// Меняем цвет глаз Визарда
(function () {
  var handlerClickSetupWizardEyes = function (evt) {
    evt.preventDefault();

    window.data.wizardEyes.style.fill = window.data.WIZARD_EYES_COLOR[window.data.countPress];
    window.data.countPress++;
    if (window.data.countPress === window.data.WIZARD_EYES_COLOR.length) {
      window.data.countPress = 0;
    }
  };

  window.data.setupWizard.addEventListener('click', handlerClickSetupWizardEyes);
})();
// ************************************************************************

// Меняем цвет плаща произвольным свойством
(function () {
  var handlerClickSetupWizardCoat = function (evt) {
    evt.preventDefault();
    window.data.wizardCoat.style.fill = (window.data.WIZARD_COAT_COLOR[window.getRandomInt(0, window.data.WIZARD_COAT_COLOR.length - 1)]);
  };

  window.data.setupWizard.addEventListener('click', handlerClickSetupWizardCoat);
})();
// ************************************************************************
