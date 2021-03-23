<template>
  <div class="container-fluid p-0 m-0" style="height: 100vh; background: #000">
    <div class="row h-100 justify-content-center align-items-center p-5">
      <carousel :paginationEnabled='false' :perPage="3">
        <slide>
          <div class="col-md-10 col-lg-10">
            <p class="heading-h1 text-light-yellow mt-5">Entertainment.</p>
            <h4 class="text-light-yellow mt-4">Pinch and swipe left to see more options. 🠔</h4>
          </div>
        </slide>
        <slide>
          <div class="card" v-tilt>
            <img src="@/assets/images/paint.png" class="card-img-top" alt="..." style="max-height: 380px; object-fit: cover;">
            <router-link to="/entertainment/draw"><h2 class="card-title">Drawing Board.</h2></router-link>
          </div>
        </slide>
        <slide>
          <div class="card" v-tilt>
            <img src="@/assets/images/img-one.jpeg" class="card-img-top" alt="..." style="max-height: 380px; object-fit: cover;">
            <h1 class="card-title">Demo 2</h1>
          </div>
        </slide>
        <slide>
          <div class="card" v-tilt>
            <img src="@/assets/images/img-two.jpeg" class="card-img-top" alt="..." style="max-height: 380px; object-fit: cover;">
            <h1 class="card-title">Demo 3</h1>
          </div>
        </slide>
        <slide>
          <div class="card" v-tilt>
            <img src="@/assets/images/img-three.jpeg" class="card-img-top" alt="..." style="max-height: 380px; object-fit: cover;">
            <h1 class="card-title">Demo 4</h1>
          </div>
        </slide>
      </carousel>
    </div>
    <p class="info-text">Tap the text to select the card.</p>
  </div>
</template>
<script>
export default {
  name: "Entertainment",
  mounted() {
    document.title = "Entertainment";
  },
  methods: {}
   
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
</style>