'use strict';

(function () {
  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');
  var setupShop = document.querySelector('.setup-artifacts-shop');
  var setupPlayer = document.querySelector('.setup-player');
  var shopArtifactsCell = setupShop.querySelector('.setup-artifacts-cell');
  var shopArtifactsCells = setupShop.querySelectorAll('.setup-artifacts-cell');
  var playerArtifactsCells = setupPlayer.querySelectorAll('.setup-artifacts-cell');
  var item = shopArtifactsCell.querySelector('img');
  var userDialog = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');
  var inputName = userDialog.querySelector('.setup-user-name');
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var defCoordsX = userDialog.style.left;
  var defCoordsY = userDialog.style.top;
  var setupFireballWrap = userDialog.querySelector('.setup-fireball-wrap');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var countPress = 0;
  var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAME = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var COLORSFIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var URL_LOAD = ' https://js.dump.academy/code-and-magick/data';
  var URL_UPLOAD = ' https://js.dump.academy/code-and-magick';
  var form = userDialog.querySelector('.setup-wizard-form');

  window.data = {
    setupDialogElement: setupDialogElement,
    dialogHandler: dialogHandler,
    setupShop: setupShop,
    setupPlayer: setupPlayer,
    shopArtifactsCell: shopArtifactsCell,
    shopArtifactsCells: shopArtifactsCells,
    playerArtifactsCells: playerArtifactsCells,
    item: item,
    userDialog: userDialog,
    similarListElement: similarListElement,
    setupOpen: setupOpen,
    setupClose: setupClose,
    inputName: inputName,
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    defCoordsX: defCoordsX,
    defCoordsY: defCoordsY,
    setupFireballWrap: setupFireballWrap,
    setupWizard: setupWizard,
    wizardEyes: wizardEyes,
    wizardCoat: wizardCoat,
    countPress: countPress,
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_SURNAME: WIZARD_SURNAME,
    WIZARD_COAT_COLOR: WIZARD_COAT_COLOR,
    WIZARD_EYES_COLOR: WIZARD_EYES_COLOR,
    COLORSFIREBALLS: COLORSFIREBALLS,
    URL_LOAD: URL_LOAD,
    URL_UPLOAD: URL_UPLOAD,
    form: form
  };
})();
