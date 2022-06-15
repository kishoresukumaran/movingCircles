'use strict';

//making the circle draggable
moveCircle(document.getElementById('circleBig'));
// moveCircle(document.getElementById('circleSmall'));

function moveCircle(circleElement) {
  console.log(`Circle clicked`);
  console.log(circleElement);
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  document.getElementById('circleBig').onmousedown = circleDragDown;
  //   document.getElementById('circleSmall').onmousedown = circleDragDown;

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
    circleElement.style.top = circleElement.offsetTop - pos2 + 'px';
    circleElement.style.left = circleElement.offsetLeft - pos1 + 'px';
  }

  function closeCircleDrag() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
