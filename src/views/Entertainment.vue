<template>
  <div>
    <div class="container align-items-center m-0" style="height: 100vh; padding: 2rem 4rem 0px 4rem; overflow-y: hidden; background: #000" @mousedown.left="onMouseDown">
      <div class="row justify-content-center d-block text-center">
        <p class="heading-h1 text-light-yellow mt-3 mb-1">Entertainment</p>
        <h5 class="text-light">Pinch and swipe left to see more options</h5>
      </div>
      <vue-horizontal responsive ref="horizontal" :button="false" snap="none" @scroll="onScroll" class="pt-2">
        <div class="card" v-tilt>
          <div class="card_image"> <img src="@/assets/images/paint.png" /> </div>
          <div class="card_title title-white">
             <router-link to="/entertainment/draw">Drawing Board</router-link>
          </div>
        </div>
        <div class="card" v-tilt>
          <div class="card_image"> <img src="@/assets/images/img-one.jpeg" /> </div>
          <div class="card_title title-white">
            <p>Whack-a-Mole</p>
          </div>
        </div>
        <div class="card" v-tilt>
          <div class="card_image"> <img src="@/assets/images/img-three.jpeg" /> </div>
          <div class="card_title title-white">
            <p>Demo 3</p>
          </div>
        </div>
        <div class="card" v-tilt>
          <div class="card_image"> <img src="@/assets/images/img-two.jpeg" /> </div>
          <div class="card_title title-white">
            <p>Feedback</p>
          </div>
        </div>
      </vue-horizontal>   
      <p class="info-text">Tap the text to select the card.</p>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      left: 0,
      originX: 0,
      originLeft: 0,
    }
  },
  name: "Entertainment",
  mounted() {
    document.title = "Entertainment";
  },
  methods: {
    onScroll({left}) {
      this.left = left
    },
    onMouseDown(e) {
      this.originX = e.pageX
      this.originLeft = this.left

      window.addEventListener("mouseup", this.onMouseUp);
      window.addEventListener("mousemove", this.onMouseMove);
    },
    onMouseUp() {
      window.removeEventListener("mouseup", this.onMouseUp);
      window.removeEventListener("mousemove", this.onMouseMove);
    },
    onMouseMove(e) {
      const offset = e.pageX - this.originX
      const left = this.originLeft - offset
      this.$refs.horizontal.scrollToLeft(left, 'auto')
    }
  },
  destroyed() {
    this.onMouseUp()
  },
   
};
</script>

<style scoped>
a{ 
  color: white;
}

a:hover {
  text-decoration: none;
}

a:focus {
  text-decoration: none;
}

.info-text {
  position: fixed;
  bottom: 4%;
  left: 3%;
  color: rgb(170, 170, 170);
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
}
  
.container {
  max-width: 100% !important;
}
</style>