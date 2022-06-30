'use strict';

var shape;

var viewport = {
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
};

let bigCircle = document.getElementById('circleBig');
let smallCircle = document.getElementById('circleSmall');

moveShape(bigCircle);
moveShape(smallCircle);

function moveShape(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
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
    }
  }
  function closeMouseMove() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
