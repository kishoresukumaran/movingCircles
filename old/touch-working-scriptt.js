'use strict';
var shape;

var viewport = {
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
};

var pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0,
  cos1 = 0,
  cos2 = 0,
  cos3 = 0,
  cos4 = 0;

let bigCircleWidth = 240;
let bigCircleHeight = 240;
let smallCircleWidth = 128;
let smallCircleHeight = 128;

let bigCircle = document.getElementById('circleBig');
let smallCircle = document.getElementById('circleSmall');

let bigCircleCenterX =
  bigCircle.getBoundingClientRect().left + bigCircleWidth / 2;
let bigCircleCenterY =
  bigCircle.getBoundingClientRect().top + bigCircleHeight / 2;

let smallCircleCenterX =
  smallCircle.getBoundingClientRect().left + smallCircleWidth / 2;
let smallCircleCenterY =
  smallCircle.getBoundingClientRect().top + smallCircleHeight / 2;

moveBigCircle(bigCircle);
moveSmallCircle(smallCircle);

function getDistance(x1, y1, x2, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function moveBigCircle(elmnt) {
  elmnt.onmousedown = moveMouse;

  function moveMouse(e) {
    pos3 = e.clientX;
    pos4 = e.clientY;
    shape = elmnt.getBoundingClientRect();

    viewport.bottom = window.innerHeight;
    viewport.right = window.innerWidth;
    document.onmouseup = closeMouseMove;
    document.onmousemove = mouseDrag;
  }
  function mouseDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    var newLeft = elmnt.offsetLeft - pos1;
    var newTop = elmnt.offsetTop - pos2;

    if (
      newLeft < viewport.left ||
      newTop < viewport.top ||
      newLeft + shape.width > viewport.right ||
      newTop + shape.height > viewport.bottom
    ) {
    } else {
      elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
      elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
      let shapes = elmnt.getBoundingClientRect();
      let bigCircleOffsetLeft = shapes.left;
      let bigCircleOffsetTop = shapes.top;
      bigCircleCenterX = bigCircleOffsetLeft + bigCircleWidth / 2;
      bigCircleCenterY = bigCircleOffsetTop + bigCircleHeight / 2;
      //   let distance = getDistance(pos3, pos4, cos3, cos4);

      let distance = getDistance(
        bigCircleCenterX,
        bigCircleCenterY,
        smallCircleCenterX,
        smallCircleCenterY
      );
      if (distance <= 184) {
        elmnt.style.backgroundColor = 'red';
      } else {
        elmnt.style.backgroundColor = 'black';
      }
      //   console.log(bigCircleCenterX, bigCircleCenterY);
      //   console.log(distance);
      //   console.log(bigCircleOffsetLeft, bigCircleOffsetTop);
      //   console.log(shape);
    }
  }
  function closeMouseMove() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function moveSmallCircle(elmnt) {
  elmnt.onmousedown = moveMouse;

  function moveMouse(e) {
    cos3 = e.clientX;
    cos4 = e.clientY;
    shape = elmnt.getBoundingClientRect();

    viewport.bottom = window.innerHeight;
    viewport.right = window.innerWidth;
    document.onmouseup = closeMouseMove;
    document.onmousemove = mouseDrag;
  }
  function mouseDrag(e) {
    cos1 = cos3 - e.clientX;
    cos2 = cos4 - e.clientY;
    cos3 = e.clientX;
    cos4 = e.clientY;
    var newLeft = elmnt.offsetLeft - pos1;
    var newTop = elmnt.offsetTop - pos2;
    if (
      newLeft < viewport.left ||
      newTop < viewport.top ||
      newLeft + shape.width > viewport.right ||
      newTop + shape.height > viewport.bottom
    ) {
    } else {
      elmnt.style.top = elmnt.offsetTop - cos2 + 'px';
      elmnt.style.left = elmnt.offsetLeft - cos1 + 'px';
      let shapes = elmnt.getBoundingClientRect();
      let smallCircleOffsetLeft = shapes.left;
      let smallCircleOffsetTop = shapes.top;
      smallCircleCenterX = smallCircleOffsetLeft + smallCircleWidth / 2;
      smallCircleCenterY = smallCircleOffsetTop + smallCircleHeight / 2;
      let distance = getDistance(
        smallCircleCenterX,
        smallCircleCenterY,
        bigCircleCenterX,
        bigCircleCenterY
      );
      if (distance <= 184) {
        elmnt.style.backgroundColor = 'red';
      } else {
        elmnt.style.backgroundColor = 'blue';
      }
      //   console.log(smallCircleCenterX, smallCircleCenterY);
      //   console.log(distance);
      //   console.log(smallCircleOffsetLeft, smallCircleOffsetTop);
    }
  }
  function closeMouseMove() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
