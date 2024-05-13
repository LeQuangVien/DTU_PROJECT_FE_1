<template>
    <div class="row">
        <div class="card">
            <div class="card-body">
                <ul class="nav nav-tabs nav-primary" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab"
                            aria-selected="true">
                            <div class="d-flex align-items-center">
                                <div class="tab-icon"><i class="fa-solid fa-user font-18 me-1"></i>
                                </div>
                                <div class="tab-title">Profile</div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="tab" href="#primaryprofile" role="tab" aria-selected="false"
                            tabindex="-1">
                            <div class="d-flex align-items-center">
                                <div class="tab-icon"><i class="fa-solid fa-address-book font-18 me-1"></i>
                                </div>
                                <div class="tab-title">Địa chỉ nhận hàng</div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" data-bs-toggle="tab" href="#primarycontact" role="tab" aria-selected="false"
                            tabindex="-1">
                            <div class="d-flex align-items-center">
                                <div class="tab-icon"><i class="fa-solid fa-lock font-18 me-1"></i>
                                </div>
                                <div class="tab-title">Đổi mật khẩu</div>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="tab-content py-3">
                    <div class="tab-pane fade show active" id="primaryhome" role="tabpanel">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex flex-column align-items-center text-center">
                                            <img src="https://xahara.vn/wp-content/uploads/ch%C3%B3-husky-ng%C3%A1o.jpg"
                                                alt="" class="rounded-circle p-1 bg-primary" width="110">
                                            <div class="mt-3">
                                                <h4></h4>
                                                <p class="text-secondary mb-1"></p>
                                            </div>
                                        </div>
                                        <hr class="my-4">
                                        <ul class="list-group list-group-flush">
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-instagram me-2 icon-inline text-danger">
                                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z">
                                                        </path>
                                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                    </svg>Instagram</h6>
                                                <span class="text-secondary">DZFullStack</span>
                                            </li>
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-facebook me-2 icon-inline text-primary">
                                                        <path
                                                            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                                        </path>
                                                    </svg>Facebook</h6>
                                                <span class="text-secondary">DZFullStack</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Full Name</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input v-model="profile.ho_va_ten" type="text" class="form-control"
                                                    placeholder="Enter Name">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input v-model="profile.email" type="text" class="form-control"
                                                    placeholder="Enter Email">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Phone</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input v-model="profile.so_dien_thoai" type="text" class="form-control"
                                                    placeholder="Phone">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3"></div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="button" class="btn btn-primary px-4" value="Save"
                                                    v-on:click="updateProfile()">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="primaryprofile" role="tabpanel">
                        <div class="row">
                            <div class="col-7">
                                <h2>Địa chỉ nhận hàng</h2>
                            </div>
                            <div class="col-5 text-end">
                                <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                                    data-bs-target="#themModal">
                                    <i class="fa-solid fa-plus"></i>Thêm địa chỉ
                                </button>
                            </div>
                            <hr>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-6">
                                        <h5 class="mb-4">Địa chỉ</h5>
                                        | ()
                                        <div class="row">
                                            <div class="col-6"></div>
                                        </div>
                                    </div>
                                    <div class="col-3"></div>
                                    <div class="col-2 text-end">
                                        <div class="row mb-2 mt-3">
                                            <button type="button" class="btn btn-danger px-5 radius-30"
                                                data-bs-toggle="modal" data-bs-target="#deleteModal">Xoá</button>
                                        </div>
                                        <div class="row">
                                            <button type="button" class="btn btn-primary px-5 radius-30"
                                                data-bs-toggle="modal" data-bs-target="#capnhatModal">Cập Nhật</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            style="display: none;" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h3 class="modal-title" id="exampleModalLabel">Xoá</h3>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5>
                                            <b>Lưu ý!</b>
                                        </h5>
                                        <b class="text-danger">Dòng này sẽ bị xoá vĩnh viễn!</b>
                                        <br>
                                        <b class="text-danger"> Bạn có chắc chắn muốn xoá <b></b> không?</b>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" class="btn btn-danger"
                                            data-bs-dismiss="modal">Xoá</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="capnhatModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true" style="display: none;">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Cập nhật địa chỉ</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-6">
                                                <label for="">Tên Người Nhận</label>
                                                <input v-model="dia_chi_update.ten_nguoi_nhan" type="text"
                                                    class="form-control mt-2 mb-2" placeholder="Nhập tên người nhận">
                                            </div>
                                            <div class="col-6">
                                                <label for="">Số điện thoại</label>
                                                <input v-model="dia_chi_update.so_dien_thoai" type="text"
                                                    class="form-control mt-2 mb-2" placeholder="Nhập số điện thoại">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label for="">Địa chỉ</label>
                                            <input v-model="dia_chi_update.dia_chi" type="text" class="form-control"
                                                placeholder="Nhập vào địa chỉ">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" class="btn btn-primary"
                                            data-bs-dismiss="modal">Lưu</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="themModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm địa chỉ</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-6">
                                                <label class="mb-2">Tên Người Nhận:</label>
                                                <input v-model="dia_chi_create.ten_nguoi_nhan" type="text"
                                                    class="form-control" placeholder="Họ và tên">
                                            </div>
                                            <div class="col-6">
                                                <label class="mb-2">Số điện thoại:</label>
                                                <input v-model="dia_chi_create.so_dien_thoai" type="text"
                                                    class="form-control" placeholder="Số điện thoại">
                                            </div>
                                        </div>
                                        <label class="mt-2 mb-2">Địa chỉ:</label>
                                        <input v-model="dia_chi_create.dia_chi" type="text" class="form-control"
                                            placeholder="Tỉnh/Thành phố, Quận/Huyện, Phường/Xã">

                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Trở
                                            lại</button>
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                            v-on:click="createDiaChi()">Hoàn
                                            Thành</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="primarycontact" role="tabpanel">
                        <div class="col">
                            <h4>Thay đổi mật khẩu</h4>
                        </div>
                        <div class="col">Quản lý mật khẩu để bảo mật tài khoản</div>
                        <hr>
                        <div class="row mb-2">
                            <div class="col-2">
                                <label for="">Mật khẩu cũ</label>
                            </div>
                            <div class="col-3">
                                <input v-model="update_password.old_password" type="text" placeholder="Nhập mật khẩu cũ"
                                    class="form-control">
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-2">
                                <label for="">Mật khẩu mới</label>
                            </div>
                            <div class="col-3">
                                <input v-model="update_password.password" type="password"
                                    placeholder="Nhập mật khẩu mới" class="form-control">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-2">
                                <label for="">Nhập lại Mật khẩu mới </label>
                            </div>
                            <div class="col-3">
                                <input v-model="update_password.re_password" type="password"
                                    placeholder="Nhập lại mật khẩu mới" class="form-control">
                            </div>
                        </div>
                        <button class="btn btn-primary" v-on:click="updateMatKhau()">Lưu</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { createToaster } from "@meforma/vue-toaster";
import baseRequest from "../../../core/baseRequest";
const toaster = createToaster({ position: "top-right" });
baseRequest
export default {
    data() {
        return {
            profile: {},
            update_password: {},
            dia_chi_create: {},
            dia_chi_update: {},
            dia_chi_delete: {},
            list_dia_chi: []
        }
    },
    mounted() {
        // this.getProfile();
        // this.loadDataDiaChi();
    },
    methods: {

    },
}
</script>
<style></style>