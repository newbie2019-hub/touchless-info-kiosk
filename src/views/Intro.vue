<template>
  <div>
    <div class="container-fluid p-0 m-0" style="height: 100vh; background: #000">
      <div class="row h-100 justify-content-center align-items-center w-100">
        <swiper ref="swiperDemo">
          <div class="row h-100 justify-content-center align-items-center w-100 p-0 m-0">
            <div class="col-md-10 col-lg-7">
              <p class="heading-h1 font-weight-bold text-light-yellow" v-tilt>Show your hands to the camera.</p>
              <h3 class="text-light font-weight-light mt-5">We'll guide you through on how to navigate with your hands.</h3>
            </div>
          </div>
          <div class="" >
            <div class="row justify-content-center h-100 align-items-center w-100 p-0 m-0" >
              <div class="col-md-12 col-lg-10">
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-8">
                    <p class="heading-h1 font-weight-bold text-light-yellow" v-tilt style="">Now pinch your fingers and drag left or right.</p>
                    <h4 class="text-white mt-5"> It is recommended to use your right hand for navigation.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center h-100 align-items-center w-100 p-0 m-0" >
            <div class="col-md-10 col-lg-10">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-8">
                  <p class="heading-h1 text-light-yellow font-weight-bold" v-tilt>Please use slow hand movements for better accuracy.</p>
                  <h4 class="text-white mb-5 mt-5 text-justify"> Switching to touchless technology reduces common touchpoints, helping safeguard against the spread of COVID-19 on surfaces.</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center h-100 align-items-center w-100 p-0 m-0" >
            <div class="col-md-12 col-lg-10">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-8">
                  <p class="heading-h1 text-light-yellow font-weight-bold" v-tilt>To return to previous route, simply point all your fingers to the left</p>
                  <h4 class="text-white mb-5 mt-5 text-justify"> There will be a 3-sec delay and your pointer will morph into a countdown.</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center h-100 align-items-center w-100 p-0 m-0" >
            <div class="col-md-12 col-lg-10">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-8">
                  <p class="heading-h1 text-light-yellow font-weight-bold" v-tilt>Simply pinch your fingers to click something.</p>
                  <h4 class="text-white mb-5 mt-5 text-justify"> You can now proceed to the main screen.</h4>
                  <router-link to="/home" class="btn btn-primary" >Proceed</router-link>
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
  data(){
    return {
      handsVisible: false,
      count: 0,
    }
  },
  mounted() {
    document.addEventListener('handsfree-handsShown', (event) => {
      if(event.detail) {
        if(this.handsVisible) return
        this.handsVisible = true
        this.nextPage()
      }

    })
  },
  components: {
    Swiper,
  },
  methods: {
    nextPage(){
      if(this.handsVisible){
        this.$refs.swiperDemo.next();
      }
    }
  },

}
</script>