'use strict';

(function () {
// Перетаскивам окно настроек визардв

  var onClickPreventDefault = function (evt) {
    evt.preventDefault();

    window.data.dialogHandler.removeEventListener('click', onClickPreventDefault);
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

      window.data.setupDialogElement.style.top = (window.data.setupDialogElement.offsetTop - shift.y) + 'px';
      window.data.setupDialogElement.style.left = (window.data.setupDialogElement.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        onClickPreventDefault(evt);
        window.data.dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  window.data.dialogHandler.addEventListener('mousedown', onMouseDown);

  // *************************************************************************

  // Перетаскиваем итем

  window.data.playerArtifactsCells.forEach(function (elem) {
    elem.addEventListener('dragover', function () {
      event.preventDefault();
    });
    elem.addEventListener('drop', function () {
      elem.appendChild(window.data.item);
    });
  });

  window.data.shopArtifactsCells.forEach(function (elem) {
    elem.addEventListener('dragover', function () {
      event.preventDefault();
    });
    elem.addEventListener('drop', function () {
      elem.appendChild(window.data.item);
    });
  });
  // ************************************************************************

})();
