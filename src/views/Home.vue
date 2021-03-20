<template>
  <div>
    <div class="container-fluid p-0 m-0" style="height: 100vh; background: #000">
      <div class="row h-100 justify-content-center align-items-center w-100">
        <swiper loop >
          <div class="row h-100 justify-content-center align-items-center w-100 p-0 m-0" >
            <div class="col-md-10 col-lg-6">
              <h1 class="font-weight-bold text-light-yellow" v-tilt>Touch-less interaction in a  <br/>Post-Covid-19 World.</h1>
              <h4 class="text-light font-weight-light mt-5">Welcome, Pinch and drag your hand to navigate left or right.</h4>
            </div>
          </div>
          <div class="" >
            <div class="row justify-content-center h-100 align-items-center w-100 p-0 m-0" >
              <div class="col-md-12 col-lg-10">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-7">
                    <h1 class="font-weight-bold text-light-yellow" v-tilt style="">Use your right hand for navigation.</h1>
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
                    <h1 class="text-light-yellow font-weight-bold" v-tilt>#StaySafe</h1>
                    <h4 class="text-white mb-5 mt-5"> Switching to touchless technology reduces common touchpoints, helping safeguard against the spread of COVID-19 on surfaces.</h4>
                    <router-link href="" to="/about" class="custom-button mt-4" >Proceed</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper>
        <!-- <router-link to="/about" class="btn btn-primary" href="" type="button">FACEBOOK</router-link> -->
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
