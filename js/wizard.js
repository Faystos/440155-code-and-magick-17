'use strict';

(function () {

  var wizard = {
      onEyesChange: function (color) {},
      onCoatChange: function (color) {},
      onFirebalChange: function (color) {}
    };

    // Изменяем цвет fireball «огненный шар»
    var handlerClickSetupFireball = function (evt) {
      evt.preventDefault();
      var newColor = window.data.COLORSFIREBALLS[window.data.countPress];
      window.data.setupFireballWrap.style.background = newColor;
      window.data.countPress++;

      if (window.data.countPress === window.data.COLORSFIREBALLS.length) {
        window.data.countPress = 0;
      }
      wizard.onFirebalChange(newColor);

      // fireballColor = newColor;
      // updateWizards();
    };

    window.data.setupFireballWrap.addEventListener('click', handlerClickSetupFireball);
    // *************************************************************************
    // Меняем цвет глаз Визарда

    var handlerClickSetupWizardEyes = function (evt) {
      evt.preventDefault();
      var newColor = window.data.WIZARD_EYES_COLOR[window.data.countPress];
      window.data.wizardEyes.style.fill = newColor;
      window.data.countPress++;

      if (window.data.countPress === window.data.WIZARD_EYES_COLOR.length) {
        window.data.countPress = 0;
      }
      wizard.onEyesChange(newColor);

      // eyesColor = newColor;
      // updateWizards();
    };

    window.data.setupWizard.addEventListener('click', handlerClickSetupWizardEyes);
    // ************************************************************************

    // Меняем цвет плаща произвольным свойством

    var handlerClickSetupWizardCoat = function (evt) {
      evt.preventDefault();
      var newColor = window.data.WIZARD_COAT_COLOR[window.getRandomInt(0, window.data.WIZARD_COAT_COLOR.length - 1)];
      window.data.wizardCoat.style.fill = newColor;
      wizard.onCoatChange(newColor);

      // coatColor = newColor;
      // updateWizards();
    };

    window.data.setupWizard.addEventListener('click', handlerClickSetupWizardCoat);

    return window.wizard = wizard;
})();
