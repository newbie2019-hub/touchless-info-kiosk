import Handsfree from 'handsfree'
import router from '../../router'
//HANDSFREE 
const handsfree = new Handsfree({ hands: { enabled: true, maxNumHands: 1 }, showDebug: false, minDetectionConfidence: 0.95, })
handsfree.start()
handsfree.use('logger', () => {
  handsfree.enablePlugins('browser')
  // handsfree.plugin.pinchScroll.enable()
})

/**
 * Pinch Click
 */
let mousepointer = document.querySelectorAll('.handsfree-pointer');


if(mousepointer){
  for (let i = 1; i < mousepointer.length; i++) {
    mousepointer[i].style.width = '35px';
    mousepointer[i].style.height = '35px';
  }
}

handsfree.use('pinchClick', ({ hands }) => {
  if (!hands.multiHandLandmarks) return
  hands.pointer.forEach((pointer, hand) => {

    if (pointer.isVisible && hands.pinchState[hand][0] === 'start') {
      const $el = document.elementFromPoint(pointer.x, pointer.y)

      for (let i = 1; i < mousepointer.length; i++) {
        mousepointer[i].style.width = '45px';
        mousepointer[i].style.height = '45px';
        mousepointer[i].style.padding = '8px';
        mousepointer[i].style.animation = 'rotating 2s linear infinite';
        mousepointer[i].style.borderRadius = '50%';
        mousepointer[i].style.border = '1.5px dashed rgb(255, 255, 255)';
        mousepointer[i].style.backgroundClip = 'content-box';
        mousepointer[i].style.clipPath = 'none';
      }

      if ($el) {
        $el.dispatchEvent(
          new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
            clientX: pointer.x,
            clientY: pointer.y,
            pageX: pointer.x,
            pageY: pointer.y,
          })
        )

        // Focus
        if (['INPUT', 'TEXTAREA', 'BUTTON', 'A'].includes($el.nodeName))
          $el.focus()
      }
    }
    else if(pointer.isVisible && hands.pinchState[hand][0] === 'held') {

      const $el = document.elementFromPoint(pointer.x, pointer.y)

      if ($el) {
        $el.dispatchEvent(
          new MouseEvent('mousemove', {
            bubbles: true,
            cancelable: true,
            clientX: pointer.x,
            clientY: pointer.y,
            pageX: pointer.x,
            pageY: pointer.y,
          })
        )

        // Focus
        if (['INPUT', 'TEXTAREA', 'BUTTON', 'A'].includes($el.nodeName))
          $el.focus()
      }

    }
    else if(pointer.isVisible && hands.pinchState[hand][0] === 'released') {

      const $el = document.elementFromPoint(pointer.x, pointer.y)

      if ($el) {
        $el.dispatchEvent(
          new MouseEvent('mouseup', {
            bubbles: true,
            cancelable: true,
            clientX: pointer.x,
            clientY: pointer.y,
            pageX: pointer.x,
            pageY: pointer.y,
          })
        )

        $el.dispatchEvent(
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            clientX: pointer.x,
            clientY: pointer.y
          })
        )
      }

      for (let i = 1; i < mousepointer.length; i++) {
        mousepointer[i].style.width = '35px';
        mousepointer[i].style.height = '35px';
        mousepointer[i].style.padding = '8px';
        mousepointer[i].style.borderRadius = '50%';
        mousepointer[i].style.border = '1.5px dashed rgb(255, 255, 255)';
        mousepointer[i].style.backgroundClip = 'content-box';
        mousepointer[i].style.clipPath = 'none';
      }
    }
    else if(pointer.isVisible){
      const $el = document.elementFromPoint(pointer.x, pointer.y)
      
      if ($el) {
        $el.dispatchEvent(
          new MouseEvent('mouseenter', {
            bubbles: true,
            view: window,
            cancelable: true,
            clientX: pointer.x,
            clientY: pointer.y,
            pageX: pointer.x,
            pageY: pointer.y,
          })
        )

        $el.dispatchEvent(
          new MouseEvent('mouseover', {
            bubbles: true,
            view: window,
            cancelable: true,
            clientX: pointer.x,
            clientY: pointer.y,
            pageX: pointer.x,
            pageY: pointer.y,
          })
        )

        $el.dispatchEvent(
          new MouseEvent('mousemove', {
            bubbles: true,
            view: window,
            cancelable: true,
            clientX: pointer.x,
            clientY: pointer.y,
            pageX: pointer.x,
            pageY: pointer.y,
          })
        )

        $el.dispatchEvent(
          new MouseEvent('mouseup', {
            bubbles: true,
            view: window,
            cancelable: true,
            clientX: pointer.x,
            clientY: pointer.y,
            pageX: pointer.x,
            pageY: pointer.y,
          })
        )
        
      }

      for (let i = 1; i < mousepointer.length; i++) {
        mousepointer[i].style.width = '35px';
        mousepointer[i].style.height = '35px';
        mousepointer[i].style.padding = '8px';
        mousepointer[i].style.borderRadius = '50%';
        mousepointer[i].style.border = '1.5px dashed rgb(255, 255, 255)';
        mousepointer[i].style.backgroundClip = 'content-box';
        mousepointer[i].style.animation = 'rotating 2s linear infinite';
        mousepointer[i].style.clipPath = 'none';
      }


    }

  })
})

/** 
 * ------------------------
 * 
 * RETURN GESTURE
 * 
 * ------------------------
 *
 */

handsfree.useGesture({
  "name": "return",
  "algorithm": "fingerpose",
  "models": "hands",
  "confidence": "8",
  "description": [
    [
      "addCurl",
      "Thumb",
      "NoCurl",
      1
    ],
    [
      "addDirection",
      "Thumb",
      "DiagonalUpRight",
      1
    ],
    [
      "addCurl",
      "Index",
      "NoCurl",
      1
    ],
    [
      "addDirection",
      "Index",
      "HorizontalRight",
      1
    ],
    [
      "addCurl",
      "Middle",
      "NoCurl",
      1
    ],
    [
      "addDirection",
      "Middle",
      "HorizontalRight",
      1
    ],
    [
      "addCurl",
      "Ring",
      "NoCurl",
      1
    ],
    [
      "addDirection",
      "Ring",
      "HorizontalRight",
      1
    ],
    [
      "addCurl",
      "Pinky",
      "NoCurl",
      1
    ],
    [
      "addDirection",
      "Pinky",
      "HorizontalRight",
      1
    ]
  ],
  "enabled": true
})

/**
 * -------------------
 * 
 *        TIMER
 * 
 * -------------------
 */

let iv = null //interval
let return_timer = null;
let countdown = 3;
let flag = false;

handsfree.use('return', ({ hands }) => {
  if (!hands.multiHandLandmarks) return
  
  if(hands.gesture[1] == null) {
    clearTimeout(return_timer)
    return_timer = null
    clearInterval(iv)
    iv = null;
  }

  if(hands.gesture[1] != null){
    if(hands.gesture[1].name == 'return') {
      returnPrev()
      flag = true
      for (let i = 1; i < mousepointer.length; i++) {
        mousepointer[i].style.width = '40px';
        mousepointer[i].style.height = '40px';
        mousepointer[i].style.padding = '8px';
        if(countdown == 3){
         mousepointer[i].style.clipPath = 'polygon(10% 38%, 11% 10%, 19% 0%, 81% 0%, 89% 8%, 90% 48%, 79% 56%, 89% 65%, 89% 93%, 81% 100%, 14% 100%, 10% 90%, 10% 64%, 30% 64%, 30% 80%, 35% 83%, 65% 83%, 69% 78%, 69% 69%, 66% 63%, 36% 63%, 36% 45%, 66% 45%, 71% 38%, 70% 22%, 65% 17%, 36% 17%, 30% 23%, 30% 38%)';
        }  
        else if(countdown == 2){
         mousepointer[i].style.clipPath = 'polygon(10% 35%, 34% 35%, 34% 22%, 39% 17%, 63% 17%, 68% 24%, 68% 39%, 62% 45%, 14% 61%, 10% 72%, 11% 100%, 88% 100%, 88% 81%, 30% 82%, 30% 77%, 82% 60%, 87% 48%, 86% 9%, 81% 0, 17% 0, 10% 10%)';
        }
        else {
         mousepointer[i].style.clipPath = 'polygon(16% 83%, 16% 100%, 86% 100%, 86% 83%, 62% 83%, 62% 9%, 57% 0%, 18% 0, 18% 19%, 29% 19%, 41% 19%, 41% 83%)';
        }  
        mousepointer[i].style.borderRadius = '0';
        mousepointer[i].style.border = '0 none';
        mousepointer[i].style.animation = 'none';
        mousepointer[i].style.backgroundClip = 'initial';
      }
    }
    else {
      clearTimeout(return_timer)
      clearInterval(iv)
      return_timer = null
      flag = false
      iv = null;
    }
  }

});

function returnPrev(){
  if(flag) return
  
  countdown = 3;

  iv = window.setInterval(() => {
    countdown--;
    console.log(countdown)
  }, 1000)

  return_timer = window.setTimeout(()=>{
    router.go(-1);
  }, 3000)
}

/**
 * ----------------------------
 * RETURN PREVIOUS ROUTE LAYOUT
 * ----------------------------
 */


