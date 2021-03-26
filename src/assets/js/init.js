import Handsfree from 'handsfree'
import router from '../../router'
//HANDSFREE 
const handsfree = new Handsfree({ hands: { enabled: true, maxNumHands: 1 }, showDebug: false, minDetectionConfidence: 0.95, assetsPath: `${window.location.origin}/assets`, })
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
    mousepointer.innerHTML += 'Hello'
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

let return_timer = null;
let flag = false;

handsfree.use('return', ({ hands }) => {
  if (!hands.multiHandLandmarks) return
  
  if(hands.gesture[1] == null) {
    clearTimeout(return_timer)
    return_timer = null
  }

  if(hands.gesture[1] != null){
    if(hands.gesture[1].name == 'return') {
      for (let i = 1; i < mousepointer.length; i++) {
        mousepointer[i].style.width = '45px';
        mousepointer[i].style.height = '45px';
        mousepointer[i].style.padding = '8px';
        mousepointer[i].style.clipPath = 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)';
        mousepointer[i].style.borderRadius = '0';
        mousepointer[i].style.border = '0 none';
        mousepointer[i].style.backgroundClip = 'initial';
      }

      returnPrev()
      flag = true
    }
    else {
      clearTimeout(return_timer)
      return_timer = null
      flag = false
    }
  }

});

function returnPrev(){
  if(flag) return
  return_timer = window.setTimeout(()=>{
    router.go(-1);
  }, 3000)
}

/**
 * ----------------------------
 * RETURN PREVIOUS ROUTE LAYOUT
 * ----------------------------
 */


