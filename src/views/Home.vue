<template>
  <div>
    <div class="container-fluid p-0 m-0" style="height: 100vh; background: #000">
      <div class="row h-100 justify-content-center align-items-center w-100">
        <swiper >
          <div class="row h-100 justify-content-center align-items-center w-100 p-0 m-0" >
            <div class="col-md-10 col-lg-7">
              <p class="heading-h1 font-weight-bold text-light-yellow" v-tilt>Touch-less interaction in a Post-Covid-19 World.</p>
              <h4 class="text-light font-weight-light mt-5">Welcome, Pinch and move your hand to navigate left or right.</h4>
            </div>
          </div>
          <div class="" >
            <div class="row justify-content-center h-100 align-items-center w-100 p-0 m-0" >
              <div class="col-md-12 col-lg-10">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-7">
                    <p class="heading-h1 font-weight-bold text-light-yellow" v-tilt style="">Use your right hand for navigation.</p>
                    <h4 class="text-white mt-5"> Please use slow hand movements for more accuracy.</h4>
                    <p class="text-white mt-5 font-weight-light"><small>These experiments are made possible by <a
                  href="https://www.npmjs.com/package/@tensorflow-models/handpose"  class="text-warning">Tensorflow JS Handpose</a> model.</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="" >
            <div class="row justify-content-center h-100 align-items-center w-100 p-0 m-0" >
              <div class="col-md-10 col-lg-10">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-7">
                    <p class="heading-h1 text-light-yellow font-weight-bold" v-tilt>#StaySafe</p>
                    <h4 class="text-white mb-5 mt-5 text-justify"> Switching to touchless technology reduces common touchpoints, helping safeguard against the spread of COVID-19 on surfaces.</h4>
                    <h5 class="text-white mb-5 mt-5"> Pinch your fingers to select.</h5>
                    <router-link href="" to="/menu" class="custom-button" >Proceed</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper } from "vue2-swiper";
export default {
  name: "Home",
  components: {
    Swiper,
  },
};
</script>
