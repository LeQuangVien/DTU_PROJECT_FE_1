<template>
    <div class="container-fluidd">
        <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
            <div class="card" style="width: 610px; height: 630px; background-color:rgba(193, 223, 208, 0.1)">
                <div class="card-body">
                    <div class="border p-4 rounded">
                        <div class="text-center">
                            <h3 class="" style="color: azure; font-size: 20px">Sign Up</h3>
                            <p style="color: azure; font-size: 17px;">Already have an account?
                                <router-link to="/dang-nhap">
                                    <a href="/dang-ky">Sign in here</a>
                                </router-link>
                            </p>
                        </div>
                        <div class="login- text-center mb-4"> <span style="color: azure;">OR SIGN IN WITH
                                EMAIL</span>
                            <hr>
                        </div>
                        <div class="form-body">
                            <form class="row g-3">
                                <div class="col-12">
                                    <label for="inputEmailAddress" class="form-label"
                                        style="color: white; font-size: 17px;">Name</label>
                                    <input v-model="dang_ki.ho_va_ten" type="text" class="form-control"
                                        placeholder="Full Name">
                                </div>
                                <div class="col-12">
                                    <label for="inputEmailAddress" class="form-label"
                                        style="color: white; font-size: 17px;">Email Address</label>
                                    <input v-model="dang_ki.email" type=" email" class="form-control"
                                        placeholder="Email Address">
                                </div>
                                <div class="col-12">
                                    <label for="inputEmailAddress" class="form-label"
                                        style="color: white; font-size: 17px;">Phone</label>
                                    <input v-model="dang_ki.so_dien_thoai" type=" email" class="form-control"
                                        placeholder="Phone Number">
                                </div>
                                <div class="col-12">
                                    <label for="inputChoosePassword" class="form-label"
                                        style="color: white;font-size: 17px;">Enter Password</label>
                                    <div class="input-group">
                                        <input v-model="dang_ki.password" type="password"
                                            class="form-control border-end-0" placeholder="Enter Password"> <a
                                            href="javascript:;" class="input-group-text bg-transparent"><i
                                                class="bx bx-hide"></i></a>
                                    </div>
                                </div>
                                <div class="col-md-6 "> <router-link to="/">
                                        <a href="/" style="color: white; font-size: 17px;">Quay Về Trang Chủ?</a>
                                    </router-link>
                                </div>
                                <div class="col-md-6 text-end"> <a href="authentication-forgot-password.html"
                                        style="color: white; font-size: 17px;">Forgot Password
                                        ?</a>
                                </div>
                                <div class="col-12">
                                    <div class="d-grid">
                                        <button v-on:click="dangKiKhachHang()" type="button" class="my-button-login"><i
                                                class="bx bxs-lock-open"></i>Sign
                                            in</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import baseRequest from '../../../core/baseRequest';
import 'toastr/build/toastr.css';
import toastr from 'toastr';
export default {
    data() {
        return {
            dang_ki: {},
        }
    },
    methods: {
        dangKiKhachHang() {
            baseRequest
                .post('khach-hang/dang-ky', this.dang_ki)
                .then((res) => {
                    if (res.data.status) {
                        toastr.success(res.data.message)
                        this.dang_ki = {}
                    } else {
                        toastr.error(res.data.message)
                    }
                })
        }
    },
}
</script>
<style>
.container-fluidd {
    width: 100%;
    height: 695px;
    background-image: url('https://img4.thuthuatphanmem.vn/uploads/2020/06/22/hinh-nen-anime-3d_092517360.jpg');
    background-size: cover;
    /* Điều chỉnh kích thước hình ảnh để che phủ toàn bộ phần tử */
    background-position: center;
}

.my-button-login {
    display: inline-block;
    padding: 10px 20px;
    background-color: rgb(131, 150, 191);
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
}

.my-button-login:hover {
    /* display: inline-block;
    padding: 10px 20px; */
    background-color: #d9534f;
    /* color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none; */
}
</style>