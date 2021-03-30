<template>
  <div>
    <div class="container-fluid" style="height: 100vh">
      <canvas class="drawcanvas" ref="drawcanvas" id="drawcanvas" @mousedown="startPosition" @mouseup="finishedPosition" @mousemove="draw"></canvas>
      <div class="color-container ">
        <div class="col">
          <p class="text-white">Color</p>
          <v-swatches v-model="color" shapes="circles" swatches="text-advanced" ></v-swatches>
          <p class="text-white  mt-3">Clear</p>
          <div class="clear" @click.prevent="clearCanvas"></div>
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
      swatches: [
        ['#F64272', '#F6648B', '#F493A7', '#F891A6'],
        ['#8b5aff', '#a27bff', '#b99cff', '#d0bdff'],
        ['#51e5db', '#74ebe3', '#96f0ea', '#b9f5f1'],
        ['#ffa51a', '#ffb748', '#ffc976', '#ffdba3']
      ]
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
    },
    clearCanvas(){
      this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
    }
  }
}
</script>
<style>
.color-container {
  width: 200px;
  height: calc(100vh - 10%);
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
}

.clear {
  height: 42px;
  width: 42px;
  position: relative;
  clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
  background-color: white;
}

.clear:hover {
  cursor: pointer;
}
</style>