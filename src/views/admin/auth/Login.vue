<template>
  <div>
    <div class="hero">
      <div class="container h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="login-card">
            <div class="text-center pb-5">
            <img src="@/assets/images/logo.png" class="mt-4" width="130px" height="130px" alt="">
            </div>
            <div class="input-group mb-3 px-4">
            <span class="input-group-text" id="basic-addon1"><b-icon-person-circle scale="1.1"></b-icon-person-circle></span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required>
            </div>
            <div class="input-group px-4">
            <span class="input-group-text" id="basic-addon1"><b-icon-key rotate="45" scale="1.2"></b-icon-key></span>
            <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required>
            </div>
            <div class="pt-2 pl-4 pb-4">
            <router-link to="/register"><small>Create new account</small></router-link>
            </div>
            <div class="text-center py-3">
            <button type="button" class="btn btn-primary rounded-pill w-75">Login
                <span><b-icon-arrow-down-circle class="ml-1" rotate="-90" scale="0.9"></b-icon-arrow-down-circle></span>
            </button>
            </div>
        </div>
        </div>
    </div>

      <div class="footer">
        <div class="text-center">
            <h6 class="pt-2"><span><img class="mr-2" src="@/assets/images/touchless-icon.png"  width="26px" height="26px" alt=""></span>Touchless Information Kiosk</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.hero {
    background-image: linear-gradient(to left, rgba(43, 62, 104, 0.60) , rgb(71, 97, 154,  0.91)), url("~@/assets/images/students-campus.jpg");
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
}

</style>