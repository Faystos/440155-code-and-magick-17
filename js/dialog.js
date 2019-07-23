'use strict';

(function () {

// Перетаскивам окно настроек визардв

  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');


  var onClickPreventDefault = function (evt) {
    evt.preventDefault();

    dialogHandler.removeEventListener('click', onClickPreventDefault);
  };


  var onMouseDown = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        onClickPreventDefault(evt);
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  dialogHandler.addEventListener('mousedown', onMouseDown);

  // *************************************************************************

  // Перетаскиваем итем

  var setupShop = document.querySelector('.setup-artifacts-shop');
  var setupPlayer = document.querySelector('.setup-player');
  var shopArtifactsCell = setupShop.querySelector('.setup-artifacts-cell');
  var shopArtifactsCells = setupShop.querySelectorAll('.setup-artifacts-cell');
  var playerArtifactsCells = setupPlayer.querySelectorAll('.setup-artifacts-cell');
  var item = shopArtifactsCell.querySelector('img');

  playerArtifactsCells.forEach(function (elem) {
    elem.addEventListener('dragover', function () {
      event.preventDefault();
    });
    elem.addEventListener('drop', function () {
      elem.appendChild(item);
    });
  });

  shopArtifactsCells.forEach(function (elem) {
    elem.addEventListener('dragover', function () {
      event.preventDefault();
    });
    elem.addEventListener('drop', function () {
      elem.appendChild(item);
    });
  });
  // ************************************************************************

})();
