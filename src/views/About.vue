<template>
   <div class="container-fluid p-0 m-0" style="height: 100vh; background: #000">
      <div class="row h-100 justify-content-center align-items-center w-100">
        <swiper :tab-mode = "tabs" tab-mode-animation loop pagination-visible pagination-clickable>
          <div class="" v-for="(n, i) in 3" :key="i">
            <div class="row justify-content-center h-100 w-100 align-items-center">
              <h2 class="text-light">Page {{n}}</h2>
            </div>
          </div>
        </swiper>
        <!-- <router-link to="/about" class="btn btn-primary" href="" type="button">FACEBOOK</router-link> -->
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
