import Handsfree from 'handsfree'

//HANDSFREE 
const handsfree = new Handsfree({ hands: { enabled: true, maxNumHands: 1 }, showDebug: false })
handsfree.start()

handsfree.use('logger', () => {
  handsfree.enablePlugins('browser')
  handsfree.plugin.pinchScroll.enable()
})

/**
 * Pinch Click
 */

let mousepointer = document.querySelectorAll('.handsfree-pointer');

if(mousepointer){
  for (let i = 1; i < mousepointer.length; i++) {
    mousepointer[i].style.width = '27px';
    mousepointer[i].style.height = '27px';
  }
}

handsfree.use('pinchClick', ({ hands }) => {
  if (!hands.multiHandLandmarks) return

  hands.pointer.forEach((pointer, hand) => {
    if (pointer.isVisible && hands.pinchState[hand][0] === 'start') {
      const $el = document.elementFromPoint(pointer.x, pointer.y)

      for (let i = 1; i < mousepointer.length; i++) {
        mousepointer[i].style.width = '35px';
        mousepointer[i].style.height = '35px';
      }

      if ($el) {
        $el.dispatchEvent(
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            clientX: pointer.x,
            clientY: pointer.y
          })
        )
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
        // $el.dispatchEvent(
        //   new MouseEvent('mouseleave', {
        //     bubbles: true,
        //     cancelable: true,
        //     clientX: pointer.x,
        //     clientY: pointer.y,
        //     pageX: pointer.x,
        //     pageY: pointer.y,
        //   })
        // )
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
      }

      for (let i = 1; i < mousepointer.length; i++) {
        mousepointer[i].style.width = '27px';
        mousepointer[i].style.height = '27px';
      }
    }
    

  })
})
