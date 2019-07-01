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
var MAX_BAR_HEIGHT = 150;
//var barHeight = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
var COLOR_BAR = ['#8B0000', '#32CD32', '#FF4500', '#4B0082'];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

/*var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};*/

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  //var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono'
  ctx.fillText('Ура вы победили!', 150, 30);
  ctx.fillText('Список результатов:', 150, 50);

  /*for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = COLOR_BAR[i];
    ctx.fillText(players[i], CLOUD_X + GAP+((GAP + BAR_WIDTH) * i), CLOUD_HEIGHT - CLOUD_GAP);
    ctx.fillText (Math.floor(times[i]), CLOUD_X + GAP+((GAP + BAR_WIDTH) * i), CLOUD_X - FONT_GAP);
    ctx.fillRect(CLOUD_X + GAP+((GAP + BAR_WIDTH) * i), GAP + BAR_WIDTH, BAR_WIDTH, 150);
  }*/
  ctx.fillStyle = '#8B0000';
  ctx.fillText(players[1], 150, 260);
  ctx.fillRect(150, 90, 40, 150);
};

// (MAX_BAR_HEIGHT *  times[i]) / maxTime )

  // ctx.fillStyle = '#8B0000';
  // ctx.fillText(players[1], 150, 260);
  // ctx.fillRect(150, 90, 40, 150);

  /* ctx.fillStyle = '#8B0000';
  ctx.fillText(players[1], CLOUD_X + GAP+((GAP + BAR_WIDTH) * 0), CLOUD_HEIGHT - CLOUD_GAP);
  ctx.fillText (Math.floor(times[1]), CLOUD_X + GAP+((GAP + BAR_WIDTH) * 0), CLOUD_X - FONT_GAP);
  ctx.fillRect(CLOUD_X + GAP+((GAP + BAR_WIDTH) * 0), GAP + BAR_WIDTH, BAR_WIDTH, 150);

  ctx.fillStyle = '#32CD32';
  ctx.fillText(players[2], CLOUD_X + GAP+((GAP + BAR_WIDTH) * 1), CLOUD_HEIGHT - CLOUD_GAP);
  ctx.fillText (Math.floor(times[2]), CLOUD_X + GAP+((GAP + BAR_WIDTH) * 1), CLOUD_X - FONT_GAP);
  ctx.fillRect(CLOUD_X + GAP+((GAP + BAR_WIDTH) * 1), GAP + BAR_WIDTH, BAR_WIDTH, 150);

  ctx.fillStyle = '#FF4500';
  ctx.fillText(players[3], CLOUD_X + GAP+((GAP + BAR_WIDTH) * 2), CLOUD_HEIGHT - CLOUD_GAP);
  ctx.fillText (Math.floor(times[3]), CLOUD_X + GAP+((GAP + BAR_WIDTH) * 2), CLOUD_X - FONT_GAP);
  ctx.fillRect(CLOUD_X + GAP+((GAP + BAR_WIDTH) * 2), GAP + BAR_WIDTH, BAR_WIDTH, 150);

  ctx.fillStyle = '#4B0082';
  ctx.fillText(players[4], CLOUD_X + GAP+((GAP + BAR_WIDTH) * 3), CLOUD_HEIGHT - CLOUD_GAP);
  ctx.fillText (Math.floor(times[4]), CLOUD_X + GAP+((GAP + BAR_WIDTH) * 3), CLOUD_X - FONT_GAP);
  ctx.fillRect(CLOUD_X + GAP+((GAP + BAR_WIDTH) * 3), GAP + BAR_WIDTH, BAR_WIDTH, 150); */

  //var maxTime = getMaxElement(times);

/*  for (var i = 0; i < players.length; i++) {

    //ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    //ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
  }*/
