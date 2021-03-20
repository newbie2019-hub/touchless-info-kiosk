<template>
  <div class="container-fluid p-0 m-0" style="height: 100vh; background: #000">
    <div class="row ml-4 mr-4 h-100 justify-content-center align-items-center w-100">
     <carousel >
       <slide>
         <div class="row h-100 justify-content-center align-items-center w-100 p-0 m-0" >
            <h1 class="font-weight-bold text-light-yellow text-uppercase" style="letter-spacing: 3px" v-tilt>Pinch and drag <br/> right to start. →</h1>
          </div>
       </slide>
       <slide>
        <div class="card bg-primary text-white p-3 " style="width: 18rem;" v-tilt>
          <div class="card-title">
            Hello World, Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis nihil dignissimos rerum dolore, ut, soluta
          </div>
        </div>
       </slide>
       <slide>
        <div class="card bg-primary text-white p-3" style="width: 18rem;" v-tilt>
          <div class="card-title">
            Hello World, Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis nihil dignissimos rerum dolore, ut, soluta
          </div>
        </div>
       </slide>
       <slide>
        <div class="card bg-primary text-white p-3" style="width: 18rem;" v-tilt>
          <div class="card-title">
            Hello World, Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis nihil dignissimos rerum dolore, ut, soluta
          </div>
        </div>
       </slide>
     </carousel>
    </div>
  </div>
</template>
<script>


export default {
  name: "Home",
  mounted() {
    document.title = "Main Menu";
    
  },
  components: {},
  methods: {},
};
</script>
