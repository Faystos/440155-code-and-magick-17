'use strict';

(function () {

  document.querySelector('.setup-similar').classList.remove('hidden');

  window.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // **************************Рабата с AJAX **********************************

  // // **************************Загрузка данных********************************
  // var onError = function (message) {
  //   var node = document.createElement('div');
  //   node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
  //   node.style.position = 'absolute';
  //   node.style.left = 0;
  //   node.style.right = 0;
  //   node.style.fontSize = '30px';
  //
  //   node.textContent = message;
  //   document.body.insertAdjacentElement('afterbegin', node);
  // };
  //
  //
  // var onLoad = function (wizards) {
  //   window.render(wizards);
  // };
  //
  // window.load(window.data.URL_LOAD, onLoad, onError);
  // // ***************************************************************************

  // ******************************Отправка данных******************************
  var formSuccess = function () {
    document.querySelector('.setup').classList.add('hidden');
    window.data.form.querySelector('.setup-submit').disabled = false;

  };

  var formSubmit = function (evt) {
    evt.preventDefault();
    window.data.form.querySelector('.setup-submit').disabled = true;
    var formData = new FormData(window.data.form);
    window.save(window.data.URL_UPLOAD, formData, formSuccess, window.onError);
  };

  window.data.form.addEventListener('submit', formSubmit);

  // ***************************************************************************

  // ***************************************************************************
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

// (function () {
//   var handlerClickSetupFireball = function (evt) {
//     evt.preventDefault();
//     window.data.setupFireballWrap.style.background = window.data.COLORSFIREBALLS[window.data.countPress];
//     window.data.countPress++;
//     if (window.data.countPress === window.data.COLORSFIREBALLS.length) {
//       window.data.countPress = 0;
//     }
//   };
//
//   window.data.setupFireballWrap.addEventListener('click', handlerClickSetupFireball);
// })();

// ************************************************************************

// Меняем цвет глаз Визарда

// (function () {
//   var handlerClickSetupWizardEyes = function (evt) {
//     evt.preventDefault();
//
//     window.data.wizardEyes.style.fill = window.data.WIZARD_EYES_COLOR[window.data.countPress];
//     window.data.countPress++;
//     if (window.data.countPress === window.data.WIZARD_EYES_COLOR.length) {
//       window.data.countPress = 0;
//     }
//   };
//
//   window.data.setupWizard.addEventListener('click', handlerClickSetupWizardEyes);
// })();

// ************************************************************************

// Меняем цвет плаща произвольным свойством
// (function () {
//   var handlerClickSetupWizardCoat = function (evt) {
//     evt.preventDefault();
//     window.data.wizardCoat.style.fill = (window.data.WIZARD_COAT_COLOR[window.getRandomInt(0, window.data.WIZARD_COAT_COLOR.length - 1)]);
//   };
//
//   window.data.setupWizard.addEventListener('click', handlerClickSetupWizardCoat);
// })();
// ************************************************************************
