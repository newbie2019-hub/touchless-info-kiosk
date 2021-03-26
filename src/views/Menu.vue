<template>
  <div class="container-fluid d-flex align-items-center p-0 m-0" style="height: 100vh; background: #000">
    <div class="" style="padding-top: 15%;">
      <splide :options="options">
        <splide-slide>
          <div class="col-md-9 col-lg-10">
            <p class="heading-h1 text-light-yellow mt-5">Menu.</p>
            <h4 class="text-light-yellow mt-4">Pinch and swipe left to see more options. 🠔</h4>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="card" v-tilt>
            <img src="@/assets/images/entertainment.png" class="card-img-top" alt="..." style="max-height: 380px; object-fit: cover;">
            <router-link to="/entertainment"><h2 class="card-title">Entertainment</h2></router-link>
          </div>
        </splide-slide>
        <splide-slide>
           <div class="card" v-tilt>
            <img src="@/assets/images/covid19.png" class="card-img-top" alt="..." style="max-height: 380px; object-fit: cover;">
           <h2 class="card-title">Covid-19</h2>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="card" v-tilt>
            <img src="@/assets/images/img-two.jpeg" class="card-img-top" alt="..." style="max-height: 380px; object-fit: cover;">
            <h1 class="card-title">Demo 3</h1>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="card" v-tilt>
            <img src="@/assets/images/img-three.jpeg" class="card-img-top" alt="..." style="max-height: 380px; object-fit: cover;">
            <h1 class="card-title">Demo 4</h1>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="card" v-tilt>
            <img src="@/assets/images/img-one.jpeg" class="card-img-top" alt="..." style="max-height: 380px; object-fit: cover;">
            <h1 class="card-title">Demo 5</h1>
          </div>
        </splide-slide>
      </splide>
    </div>
   
    <p class="info-text">Tap the text to select the card.</p>
  </div>
</template>
<script>
export default {
  name: "Home",
   data() {
    return {
      options: {
        rewind : false,
        width  : '100vw',
        height: '100vh',
        autoWidth: true,
        perPage: 2,
        gap    : '3rem',
        padding: '6rem',
        pagination: false,
        arrows: false,
      },
    }
  },
  mounted() {
    document.title = "Main Menu";
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
