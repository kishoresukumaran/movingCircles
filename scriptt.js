'use strict';
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
      document.onmousemove = circleDrag;
      document.onmouseup = circleCloseDrag;
    }
    function circleDrag(e) {
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      bigCircle.domObject.style.top =
        bigCircle.domObject.offsetTop >= 0
          ? bigCircle.domObject.offsetTop - pos2 + 'px'
          : 0;
      bigCircle.domObject.style.left =
        bigCircle.domObject.offsetLeft >= 0
          ? bigCircle.domObject.offsetLeft - pos1 + 'px'
          : 0;

      console.log(
        bigCircle.domObject.offsetTop + bigCircle.domObject.offsetHeight
      );
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
    console.log('button clicked');
    let cos1 = 0,
      cos2 = 0,
      cos3 = 0,
      cos4 = 0;
    smallCircle.domObject.onmousedown = circleSmallStartPosition;
    function circleSmallStartPosition(e) {
      cos3 = e.clientX;
      cos4 = e.clientY;
      document.onmousemove = circleSmallDrag;
      document.onmouseup = circleSmallCloseDrag;
    }
    function circleSmallDrag(e) {
      cos1 = cos3 - e.clientX;
      cos2 = cos4 - e.clientY;
      cos3 = e.clientX;
      cos4 = e.clientY;
      smallCircle.domObject.style.top =
        smallCircle.domObject.offsetTop >= 0
          ? smallCircle.domObject.offsetTop - cos2 + 'px'
          : 0;
      smallCircle.domObject.style.left =
        smallCircle.domObject.offsetLeft >= 0
          ? smallCircle.domObject.offsetLeft - cos1 + 'px'
          : 0;

      console.log(
        smallCircle.domObject.offsetTop + smallCircle.domObject.offsetHeight
      );
    }
    function circleSmallCloseDrag() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  },
};

bigCircle.domObject.addEventListener('click', bigCircle.moveCircle);
smallCircle.domObject.addEventListener('click', smallCircle.moveCircle);
