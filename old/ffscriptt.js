'use strict';

var rect;
var viewport = {
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
};

let bigCircle = {
  domObject: document.getElementById('circleBig'),
  moveCircle() {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    bigCircle.domObject.onmousedown = circleStartPosition;
    function circleStartPosition(e) {
      pos3 = e.clientX;
      pos4 = e.clientY;
      rect = bigCircle.domObject.getBoundingClientRect();
      viewport.right = window.innerWidth;
      viewport.bottom = window.innerHeight;
      document.onmousemove = circleDrag;
      document.onmouseup = circleCloseDrag;
    }
    function circleDrag(e) {
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      var newTop = bigCircle.domObject.offsetTop - pos2;
      var newLeft = bigCircle.domObject.offsetLeft - pos1;
      if (
        newLeft < viewport.left ||
        newTop < viewport.top ||
        newLeft + rect.width > viewport.right ||
        newTop + rect.height > viewport.bottom
      ) {
      } else {
        bigCircle.domObject.style.top =
          bigCircle.domObject.offsetTop - pos2 + 'px';
        bigCircle.domObject.style.left =
          bigCircle.domObject.offsetLeft - pos1 + 'px';
      }
    }
    function circleCloseDrag() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  },
};

let smallCircle = {
  domObject: document.getElementById('circleSmall'),
  moveCircle() {
    let cos1 = 0,
      cos2 = 0,
      cos3 = 0,
      cos4 = 0;
    smallCircle.domObject.onmousedown = circleSmallStartPosition;
    function circleSmallStartPosition(e) {
      cos3 = e.clientX;
      cos4 = e.clientY;
      rect = smallCircle.domObject.getBoundingClientRect();
      viewport.right = window.innerWidth;
      viewport.bottom = window.innerHeight;
      document.onmousemove = circleSmallDrag;
      document.onmouseup = circleSmallCloseDrag;
    }
    function circleSmallDrag(e) {
      cos1 = cos3 - e.clientX;
      cos2 = cos4 - e.clientY;
      cos3 = e.clientX;
      cos4 = e.clientY;
      var newTop = bigCircle.domObject.offsetTop - cos2;
      var newLeft = bigCircle.domObject.offsetLeft - cos1;
      if (
        newLeft < viewport.left ||
        newTop < viewport.top ||
        newLeft + rect.width > viewport.right ||
        newTop + rect.height > viewport.bottom
      ) {
      } else {
        smallCircle.domObject.style.top =
          smallCircle.domObject.offsetTop - cos2 + 'px';
        smallCircle.domObject.style.left =
          smallCircle.domObject.offsetLeft - cos1 + 'px';
      }
    }
    function circleSmallCloseDrag() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  },
};
bigCircle.domObject.addEventListener('click', bigCircle.moveCircle);
smallCircle.domObject.addEventListener('click', smallCircle.moveCircle);
