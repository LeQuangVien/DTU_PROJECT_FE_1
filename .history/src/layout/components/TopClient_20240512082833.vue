<template>
    <header>
        <div class="topbar">
            <div class="containe">
                <div class="d-flex flex-row-reverse ">
                    <div class="p-2 me-3"><i class="fa-solid fa-cart-shopping "></i>
                        <router-link to="/gio-hang">
                            <a href="/gio-hang" style="font-size: 15px; color: black;">
                                Giỏ
                                Hàng </a>
                        </router-link>
                    </div>
                    <span style="font-size: 30px;margin-left: 20px;margin-right: 20px">|</span>
                    <template v-if="auth">
                        <div class="user-box dropdown">
                            <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                                href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="../../assets/images/avatars/avatar-2.png" class="user-img" alt="user avatar">
                                <div class="user-info ps-3">
                                    <p class="user-name mb-0">{{ name_kh }}</p>
                                    <p class="designattion mb-0">Web Designer</p>
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                    <router-link to="/profile">
                                        <a class="dropdown-item" href="javascript:;">
                                            <i class="bx bx-user"></i><span>Profile</span>
                                        </a>
                                    </router-link>
                                </li>
                                <li>
                                    <div class="dropdown-divider mb-0"></div>
                                </li>
                                <li><a v-on:click="dangXuat()" class="dropdown-item"><i
                                            class='bx bx-log-out-circle'></i><span>Đăng Xuất</span></a>
                                </li>
                                <li><a v-on:click="dangXuatAll()" class="dropdown-item"><i
                                            class='bx bx-log-out-circle'></i><span>Đăng Xuất Tất Cả</span></a>
                                </li>
                            </ul>
                        </div>
                    </template>
                    <template v-else>
                        <div class="user-box">
                            <a class="d-flex align-items-center">
                                <router-link to="/dang-nhap">
                                    <button type="button" class="btn btn-primary me-2"><i class="bx bxs-lock-open"></i>
                                        Đăng Nhập</button>
                                </router-link>
                                <router-link to="/dang-ky">
                                    <button type="button" class="btn btn-secondary"><i
                                            class="fa-solid fa-right-to-bracket fa-2xs"></i> Đăng Ký</button>
                                </router-link>
                            </a>
                        </div>
                    </template>
                    <!-- <div class="p-2"><i class="fa-solid fa-person "></i><router-link to="/dang-nhap">
                            <a href="/dang-nhap" style="font-size: 15px; color: black;">
                                Đăng Nhập</a>
                        </router-link>
                    </div> -->
                    <span style="font-size: 30px; margin-left: 20px; margin-right: 20px;">|</span>
                    <div class="p-2"> <i class="fa-solid fa-circle-info "></i><a href=""
                            style="font-size: 15px; color: black;" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            Trợ Giúp</a>
                    </div>

                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Trợ Giúp</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center">
                            <b>Liên Hệ Với Chúng Tôi</b>
                        </div>
                        <div class="content-report">
                            <div class="row">
                                <div class="col-1 text-end " style="margin-top: 25px;">
                                    <i class="fa-regular fa-user "></i>
                                </div>
                                <div class="col-11 mt-3">
                                    <input type="text" placeholder="Họ Tên" class="form-control">
                                </div>
                                <div class="col-1 text-end" style="margin-top: 25px;">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <div class="col-11 mt-3">
                                    <input type="text" placeholder="Phone" class="form-control">
                                </div>
                                <div class="col-1 text-end" style="margin-top: 25px;">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div class="col-11 mt-3">
                                    <input type="text" placeholder="Nhập Email" class="form-control">
                                </div>
                                <div class="col-1 text-end" style="margin-top: 25px;">
                                    <i class="fa-solid fa-message"></i>
                                </div>
                                <div class="col-11 mt-3">
                                    <textarea placeholder="Gửi Lời Nhắn" class="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="button" style="margin-top: 20px;" class="my-btn" data-bs-dismiss="modal">Gửi
                                Phản Hồi</button>
                        </div>
                    </div>
                    <div class="modal-footer text-end">
                        <button type="button" class="my-btn2" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import kiemTraKhachHang from '../../router/kiemTraKhachHang.js'
import baseRequest from '../../core/baseRequest';
export default {
    data() {
        return {
            auth: false,
            name_kh: '',
        }
    },
    mounted() {
        this.checkLogin();
        this.name_kh = localStorage.getItem('ten_kh');
    },
    methods: {
        checkLogin() {
            baseRequest
                .post('khach-hang/check-login')
                .then((res) => {
                    if (res.data.status) {
                        this.auth = true
                    }
                })
        },
    },
}
</script>
<style>
.my-btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: forestgreen;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
}

.my-btn2 {
    display: inline-block;
    padding: 10px 20px;
    background-color: red;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
}

.my-btn:hover {
    background-color: red;
}
</style>