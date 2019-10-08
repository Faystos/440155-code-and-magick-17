'use strict';

(function () {

  // *****************************Управление цветом*****************************
  var coatColor;
  var eyesColor;
  var fireballColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
     }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
     }  
    return rank;
  };  

  window.updateWizards = function () {

    window.render(wizards.slice().
      sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
        }
        return rankDiff;
      }));
  };

  window.wizard.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();    
  });

  window.wizard.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();    
  });

  window.wizard.onFirebalChange = function (color) {
    fireballColor = color;
    updateWizards();    
  };  

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
