'use strict';

let x = document.getElementById('circleBig');
let y = document.getElementById('circleSmall');
//making the circle draggable
moveCircle(document.getElementById(x));
moveCircle(document.getElementById(y));

function moveCircle(circleElement) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  x.onmousedown = circleDragDown;
  y.onmousedown = circleDragDown;

  function circleDragDown(e) {
    e = e || window.event;
    e.preventDefault();
    //getting the mouse pointer position at startup
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeCircleDrag;
    //circleDrag function to be called when moving the mouse
    document.onmousemove = circleDrag;
  }

  function circleDrag(e) {
    e = e || window.event;
    e.preventDefault();
    //Calculating new curor position
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    //Set the Circle's new position
    x.style.top = x.offsetTop - pos2 + 'px';
    x.style.left = x.offsetLeft - pos1 + 'px';
  }

  function closeCircleDrag() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
