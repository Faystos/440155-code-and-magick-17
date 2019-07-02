'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var GAP = 50;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = -150;
var COLOR_BAR = ['#8B0000', '#32CD32', '#FF4500', '#4B0082'];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_WIDTH, TEXT_WIDTH - (CLOUD_GAP + CLOUD_GAP));
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_WIDTH, TEXT_WIDTH);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = COLOR_BAR[i];
    ctx.fillText(players[i], CLOUD_X + GAP + ((GAP + BAR_WIDTH) * i), CLOUD_HEIGHT - CLOUD_GAP);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + ((GAP + BAR_WIDTH) * i), CLOUD_X - FONT_GAP);
    ctx.fillRect(CLOUD_X + GAP + ((GAP + BAR_WIDTH) * i), CLOUD_HEIGHT - 25, BAR_WIDTH, (MAX_BAR_HEIGHT * times[i]) / maxTime);
  }
};
