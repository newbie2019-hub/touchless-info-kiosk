<template>
  <div>
    <div class="row justify-content-center align-items-center">
      <div id="score"></div>
      <canvas id="game" width="375" height="375"></canvas>
      <div id="introduction">Hold down the mouse to stretch out a stick</div>
      <div id="perfect">DOUBLE SCORE</div>
      <button id="restart">RESTART</button>
    </div>
  </div>
</template>
<script>
export default {
  created(){
    
  },
  mounted() {
    
  },
}
</script>
<style>
#canvas {
  background-color: rgb(0, 0, 0);
}
</style>