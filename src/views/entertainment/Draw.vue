<template>
  <div>
    <div class="container-fluid" style="height: 100vh">
      <canvas class="drawcanvas" ref="drawcanvas" id="drawcanvas" @mousedown="startPosition" @mouseup="finishedPosition" @mousemove="draw"></canvas>
      <div class="color-container align-items-center justify-content-center">
        <div class="d-block">
          <p class="text-white">Color</p>
          <v-swatches v-model="color"></v-swatches>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VSwatches from 'vue-swatches'
import 'vue-swatches/dist/vue-swatches.css'
export default {
  components: { VSwatches },
  data() {
    return {
      painting: false,
      ctx: '',
      color: 'white',
    }
  },
  mounted() {
   const canvas = document.querySelector('#drawcanvas');
   canvas.setAttribute('width', window.innerWidth)
   canvas.setAttribute('height', window.innerHeight)
   const ctx_i = canvas.getContext('2d');

   ctx_i.width = window.innerWidth;
   ctx_i.height = window.innerHeight;
   this.ctx = ctx_i
  },
  methods: {
    startPosition(e){
      this.painting = true;
      this.draw(e)
    },
    draw(e){
      if(!this.painting) return
      this.ctx.lineWidth = 10;
      this.ctx.lineCap = 'round';
      this.ctx.strokeStyle = this.color;
      this.ctx.lineTo(e.clientX, e.clientY);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(e.clientX, e.clientY);
    },
    finishedPosition(){
      this.painting = false;
      this.ctx.beginPath();
    }
  }
}
</script>
<style>
.color-container {
  width: 200px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>