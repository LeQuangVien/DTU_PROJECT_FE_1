<template>
   <div class="container-fluidd">
      <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
         <div class="card" style="width: 610px; height: 630px; background-color:rgba(193, 223, 208, 0.1)">
            <div class="card-body">
               <div class="border p-4 rounded">
                  <div class="text-center">
                     <h3 class="" style="color: azure; font-size: 20px">Sign in</h3>
                     <p style="color: azure; font-size: 17px;">Don't have an account yet?
                        <router-link to="/dang-ky">
                           <a href="/dang-ky">Sign up
                              here</a>
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
                              style="color: white; font-size: 17px;">Email Address</label>
                           <input v-model="login_khach_hang.email" type=" email" class="form-control"
                              placeholder="Email Address">
                        </div>
                        <div class="col-12">
                           <label for="inputChoosePassword" class="form-label"
                              style="color: white;font-size: 17px;">Enter Password</label>
                           <div class="input-group" id="show_hide_password">
                              <input v-model="login_khach_hang.password" type="password"
                                 class="form-control border-end-0" placeholder="Enter Password"> <a href="javascript:;"
                                 class="input-group-text bg-transparent"><i class="bx bx-hide"></i></a>
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
                              <button v-on:click="loginKhachHang()" type="button" class="my-button-login"><i
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
         login_khach_hang: {},
      }
   },
   methods: {
      loginKhachHang() {
         baseRequest
            .post('khach-hang/dang-nhap', this.login_khach_hang)
            .then((res) => {
               if (res.data.status == 1) {
                  // console.log(res.data.chia_khoa);
                  toastr.success(res.data.message);
                  localStorage.setItem('chia_khoa_16', res.data.chia_khoa);
                  localStorage.setItem('ten_kh', res.data.ten_kh);
                  localStorage.setItem('ten_kh', res.data.ten_kh);
                  this.khach_hang = {};
                  this.$router.push('/');
               } else if (res.data.status == 2) {
                  toastr.warning(res.data.message);
               } else {
                  toastr.error(res.data.message);
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