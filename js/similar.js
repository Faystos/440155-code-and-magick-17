'use strict';

(function () {

  // *****************************Управление цветом*****************************
  var coatColor;
  var eyesColor;
  var fireballColor;
  var wizards = [];

  var updateWizards = function () {

    var sameCoatWizards = wizards.filter(function (it) {
      return it.colorCoat === coatColor;
    });
    var sameEyesWizards = wizards.filter(function (it) {
      return it.colorEyes === eyesColor;
    });

    var filteredWizards = sameCoatWizards.concat(sameEyesWizards).concat(wizards);

    var uniqueWizards =
    filteredWizards.filter(function (it, i) {
      return filteredWizards.indexOf(it) === i;
    });

    window.render(uniqueWizards);
  };

  // // Изменяем цвет fireball «огненный шар»
  // var handlerClickSetupFireball = function (evt) {
  //   evt.preventDefault();
  //   var newColor = window.data.COLORSFIREBALLS[window.data.countPress];
  //   window.data.setupFireballWrap.style.background = newColor;
  //   window.data.countPress++;
  //
  //   if (window.data.countPress === window.data.COLORSFIREBALLS.length) {
  //     window.data.countPress = 0;
  //   }
  //
  //   fireballColor = newColor;
  //   updateWizards();
  // };
  //
  // window.data.setupFireballWrap.addEventListener('click', handlerClickSetupFireball);
  // // *************************************************************************
  // // Меняем цвет глаз Визарда
  //
  // var handlerClickSetupWizardEyes = function (evt) {
  //   evt.preventDefault();
  //   var newColor = window.data.WIZARD_EYES_COLOR[window.data.countPress];
  //   window.data.wizardEyes.style.fill = newColor;
  //   window.data.countPress++;
  //
  //   if (window.data.countPress === window.data.WIZARD_EYES_COLOR.length) {
  //     window.data.countPress = 0;
  //   }
  //
  //   eyesColor = newColor;
  //   updateWizards();
  // };
  //
  // window.data.setupWizard.addEventListener('click', handlerClickSetupWizardEyes);
  // // ************************************************************************
  //
  // // Меняем цвет плаща произвольным свойством
  //
  // var handlerClickSetupWizardCoat = function (evt) {
  //   evt.preventDefault();
  //   var newColor = window.data.WIZARD_COAT_COLOR[window.getRandomInt(0, window.data.WIZARD_COAT_COLOR.length - 1)];
  //   window.data.wizardCoat.style.fill = newColor;
  //   coatColor = newColor;
  //   updateWizards();
  // };
  //
  // window.data.setupWizard.addEventListener('click', handlerClickSetupWizardCoat);
  // ************************************************************************

  // ***************************************************************************

  // **************************Загрузка данных********************************

  var onLoad = function (data) {
    wizards = data;
    updateWizards();
  };

  window.onError = function (message) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = message;
    document.body.insertAdjacentElement('afterbegin', node);
  };


  window.load(window.data.URL_LOAD, onLoad, window.onError);
  // ***************************************************************************
})();