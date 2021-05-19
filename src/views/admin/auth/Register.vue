<template>
    <div>
        <div class="hero">
            <div class="container h-100">
                <div class="row justify-content-center h-100">
                <div class="col-md-6 col-lg-6">
                    <div class="d-flex justify-content-center align-items-center h-100">
                    <img src="@/assets/images/logo.png" width="230px" height="230px" alt="">
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="reg-card">
                        <h2 class="text-center py-4">Create Account</h2>
                        <div class="input-group mb-3 px-4">
                        <span class="input-group-text" id="basic-addon1"><b-icon-person-circle scale="1.1"></b-icon-person-circle></span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required>
                        </div>
                        <div class="input-group mb-3 px-4">
                        <span class="input-group-text" id="basic-addon1"><b-icon-key rotate="45" scale="1.2"></b-icon-key></span>
                        <input type="password" class="form-control" placeholder="Enter Password" aria-label="Password" aria-describedby="basic-addon1" required>
                        </div>
                        <div class="input-group mb-3 px-4">
                        <span class="input-group-text" id="basic-addon1"><b-icon-people scale="1.2"></b-icon-people></span>
                        <select class="form-select custom-select" required>
                            <option disabled selected>Select Organization</option>
                            <option>Drop Student</option>
                        </select>
                        </div>
                        <div class="input-group mb-3 px-4">
                        <span class="input-group-text" id="basic-addon1"><b-icon-at scale="1.2"></b-icon-at></span>
                        <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required>
                        </div>
                        <div class="text-center py-3">
                        <button type="button" class="btn btn-primary rounded-pill w-75">Register
                            <span><b-icon-arrow-down-circle class="ml-1" rotate="-90" scale="0.9"></b-icon-arrow-down-circle></span>
                        </button>
                        </div>
                    </div>
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
</script>
<style>
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