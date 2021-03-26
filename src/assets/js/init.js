import Handsfree from 'handsfree'

//HANDSFREE 
const handsfree = new Handsfree({ hands: { enabled: true, maxNumHands: 1 }, showDebug: false, minDetectionConfidence: 0.9, minTrackingConfidence: 0.9,  assetsPath: `${window.location.origin}/assets`, })
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
        
      }
    }

  })
})


