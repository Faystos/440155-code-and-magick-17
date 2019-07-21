'use strict';

(function () {

  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
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
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault)
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });


})();


/*
var onMouseDown = function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };
  var dragged = false;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    var newBlockX = buttonMain.offsetLeft - shift.x;
    var newBlockY = buttonMain.offsetTop - shift.y;

    if (newBlockX < mapOverlay.offsetLeft - buttonMain.offsetWidth / 2 ||
    newBlockY < mapOverlay.offsetTop ||
    newBlockX + buttonMain.offsetWidth > mapOverlay.offsetLeft + mapOverlay.offsetWidth + (buttonMain.offsetWidth / 2) ||
    newBlockY + buttonMain.offsetHeight > mapOverlay.offsetTop + mapOverlay.offsetHeight + (buttonMain.offsetHeight / 2)) {

      document.removeEventListener('mousemove', onMouseMove);

    } else {
      buttonMain.style.top = newBlockY + 'px';
      buttonMain.style.left = newBlockX + 'px';
    }

  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();
    getCoords(buttonMain);

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function () {
        buttonMain.preventDefault();
        buttonMain.removeEventListener('click', onClickPreventDefault);
      };
      buttonMain.addEventListener('click', onClickPreventDefault);
    }

  };


  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
};

buttonMain.addEventListener('mousedown', onMouseDown);
*/
