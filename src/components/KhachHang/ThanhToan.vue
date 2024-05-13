<template>
    <div class="container-fluid">
        <div class="content-1">
            <b class="title">THANH TOÁN</b>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div>
                        <label for="">Họ Tên*</label>
                        <input v-model="create_dia_chi.ten_nguoi_nhan" style="width: 760px;" type="text"
                            class="form-control" placeholder="Nhập Họ Và Tên">
                    </div>
                    <div class="mt-3">
                        <label for="">Số Điện Thoại*</label>
                        <input v-model="create_dia_chi.so_dien_thoai" style="width: 760px;" type="text"
                            class="form-control" placeholder="Nhập Số Điện Thoại" required>
                    </div>
                    <div class="mt-3">
                        <label for="">Nhập Địa Chỉ Cụ Thể*</label>
                        <input v-model="create_dia_chi.dia_chi" style="width: 760px;" type="text" class="form-control"
                            placeholder="Nhập Địa Chỉ" required>
                    </div>
                    <div class="mt-3">
                        <label for="">Email*</label>
                        <input v-model="create_dia_chi.email" style="width: 760px;" type="text" class="form-control"
                            placeholder="Nhập Email" required>
                    </div>
                    <div class="mt-3">
                        <label for="">Ghi Chú</label>
                        <textarea v-model="create_dia_chi.ghi_chu" style="width: 760px;" class="form-control">
                        </textarea>
                    </div>
                    <!-- <div class="content-thanhtoan text-end me-5 mb-3">
                        <button style="margin-right: 28px;" type="submit" v-on:click="createDiaChiNhanHang()"
                            class="mybutton"> Xác
                            Nhận</button>
                    </div> -->
                </div>
                <div class="col-lg-4">
                    <div class="card" style="background-color: gainsboro;">
                        <div class="title-thanhtoan">
                            <b>Đơn Hàng</b>
                        </div>
                        <template v-for="(value, index) in list_chonn" :key="value">
                            <div class="content-thanhtoan">
                                <input v-on:change="tong()" v-model="value.chon_sp" class="form-check-input me-3"
                                    type="checkbox" value="" aria-label="...">
                                <b style="font-size: 18px; color: black;">{{ value.ten_san_pham }}</b>
                                <p class="para-4">Dung lượng: 256GB</p>
                                <p class="para-4">Giá: {{ formatToVND(value.thanh_tien) }}</p>
                                <div class="d-flex justify-content-between">
                                    <p class="para-4">Số lượng: {{ value.so_luong }}</p>
                                    <button class="mybutton" style="margin-right: 40px;"
                                        v-on:click="deleteThanhToan(value)">Xóa</button>
                                </div>
                                <hr>
                            </div>
                        </template>
                        <div class="content-thanhtoan1">
                            <p class="para-4">Giảm Giá</p>
                            <b>0đ</b>
                            <p class="para-4">Tổng</p>
                            <b>{{ formatToVND(tong_tien) }}</b>
                        </div>
                        <div class="content-3">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    <b> Chuyển khoản ngân hàng</b>
                                    <p>Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng
                                        Mã đơn hàng của bạn trong phần Nội dung thanh toán. Đơn hàng sẽ đươc giao sau
                                        khi tiền đã chuyển.</p>
                                    <p>Teckcombank: 19038393012011 - Le Quang Vien</p>
                                    <p>Hoặc Quét Mã QR</p>
                                    <img style="width: 200px; margin-left: 55px"
                                        src="../../assets/images/teckcombank.jpg" alt="">
                                </label>
                            </div>
                            <div class="form-check mt-3">
                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault2" checked>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    <b>Trả tiền mặt khi nhận hàng</b>
                                </label>
                            </div>
                        </div>
                        <div class="content-thanhtoan text-end me-5 mb-3">
                            <button type="submit" v-on:click="createDiaChiNhanHang(), muaHang()" class="mybutton"> Xác
                                Nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import baseRequest from '../../core/baseRequest'
import toastr from 'toastr';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            create_dia_chi: {},
            list_chonn: {},
            tong_tien: 0,
            dia_chi: 0,
        }
    },
    mounted() {
        this.callSanPhamChon();
    },
    methods: {
        createDiaChiNhanHang() {
            baseRequest
                .post('dia-chi/Khach-Hang/tao-dia-chi-dat-hang', this.create_dia_chi)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        },
        formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },
        callSanPhamChon() {
            baseRequest
                .get('gio-hang/gio-hang/thanh-toan')
                .then((res) => {
                    this.list_chonn = res.data.data
                });
        },
        tong() {
            let tmp = 0;
            this.list_chonn.forEach((value, index) => {
                if (value.chon_sp == true) {
                    tmp = tmp + value.thanh_tien;
                }
            })
            this.tong_tien = tmp;
        },
        deleteThanhToan(value) {
            baseRequest
                .post('gio-hang/delete/thanh-toan', value)
                .then((res) => {
                    if (res.data.status) {
                        toastr.success(res.data.message);
                        this.callSanPhamChon();
                    } else {
                        toastr.error(res.data.message);
                    }
                })
        },
        muaHang() {
            var list_chon = [];
            this.list_chonn.forEach((value, key) => {
                if (value.chon_sp && value.chon_sp == true) {
                    list_chon.push(value);
                }
            });
            var payload = {
                'ds_mua_sp': list_chon,
            };
            baseRequest
                .post('khach-hang/don-hang/thanh-toan', payload)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.tong_tien = 0,
                            this.loadDataGioHang();
                        this.list_chonn = {}
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        }
    },
}
</script>
<style>
.mybutton {
    display: inline-block;
    padding: 10px 20px;
    background-color: #d9534f;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
}

.content-3 {
    margin-left: 30px;
}

.content-1 {
    text-align: center;
    font-size: 30px;
    margin-top: 50px;
    margin-bottom: 50px
}

.content-thanhtoan1 {
    text-align: end;
    margin-right: 40px;
    font-size: 25px;
}

.title-thanhtoan {
    margin-left: 30px;
    font-size: 25px;
    color: black;
    margin-top: 20px
}

.content-thanhtoan {
    margin-left: 50px;
    margin-top: 20px;
}

.para-4 {
    font-size: 18px;
    margin-top: 10px
}
</style>