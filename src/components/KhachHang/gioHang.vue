<template>
    <div class="container-fluid">
        <div class="content-1">
            <b class="title">GIỎ HÀNG</b>
        </div>
        <div class="row">
            <div class="col-lg-8">
                <table class="table">
                    <thead>
                        <tr class="text-center">
                            <th></th>
                            <th>Sản Phẩm</th>
                            <th>Mô Tả</th>
                            <th>Giá Tiền</th>
                            <th>Số lượng</th>
                            <th>Tạm tính</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(value, index) in list_gio_hang" :key="index">
                            <tr class="text-center">
                                <td class="align-middle text-center">
                                    <input v-on:change="tongSanPham()" v-model="value.chon_sp"
                                        class="form-check-input me-3" type="checkbox" value="" aria-label="...">
                                </td>
                                <td>
                                    <img style="width: 100px;" v-bind:src="value.hinh_anh" alt="">
                                </td>
                                <td>
                                    <b style="font-size: 20px;">
                                        {{ value.ten_san_pham }}</b>
                                    <p>Dung lượng: 256GB
                                        Tình trạng: Mới
                                        Màu sắc: Trắng</p>
                                </td>
                                <td>
                                    <p style="font-size: 18px;">{{ formatToVND(value.don_gia) }}</p>
                                </td>
                                <td style="width: 140px;" class="align-middle">
                                    <div class="input-group input-spinner d-flex justify-content-center flex-row"
                                        style="flex-wrap: nowrap;">
                                        <button class="btn btn-white" type="button" id="button-minus"
                                            v-on:click="value.so_luong--; updateGioHang(value)"> − </button>
                                        <input v-model="value.so_luong" v-on:change="updateGioHang(value)" type="text"
                                            class="form-control text-center">
                                        <button v-on:click="value.so_luong++; updateGioHang(value)"
                                            class="btn btn-white" type="button" id="button-plus"> + </button>
                                    </div>
                                </td>
                                <td>
                                    <p style="font-size: 18px;">{{ value.gia_khuyen_mai }}</p>
                                </td>
                                <td>
                                    <button class="my-button1" v-on:click="xoaGioHang(value)">Xóa</button>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
            <div class="col-lg-4">
                <div class="card tongtien" style="background-color: gainsboro;">
                    <div class="title-thanhToan">
                        <b>Tổng giỏ hàng</b>
                    </div>
                    <div class="content text-end">
                        <p class="para-giohang">Tạm Tính</p>
                        <b class="para-giohang" style="color: black; font-size: 25px;">{{ formatToVND(tong_tien) }}</b>
                        <p class="para-giohang">Giảm Giá</p>
                        <b class="para-giohang" style="color: black; font-size: 25px;">{{ formatToVND(tong_khuyen_mai)
                            }}</b>
                    </div>
                    <hr>
                    <div class="thanhtien text-end">
                        <b style="font-size: 20px;">Tổng:</b>
                        <b style="font-size: 20px; color: red;">{{ formatToVND(tong_tien) }}</b>
                        <div>
                            <router-link to="/thanh-toan">
                                <button v-on:click="muaHang()" class="my-button mb-3 mt-3">Thanh Toán Ngay</button>
                            </router-link>
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
export default {
    data() {
        return {
            list_gio_hang: [],
            tong_tien: 0,
            tong_khuyen_mai: 0,
        }
    },
    mounted() {
        this.callListSanPhamGioHang();
    },
    methods: {
        formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },
        callListSanPhamGioHang() {
            baseRequest
                .get('trang-chu/select-gio-hang')
                .then((res) => {
                    this.list_gio_hang = res.data.data
                })
        },
        tongSanPham() {
            let tmp = 0;
            this.list_gio_hang.forEach((value, index) => {
                if (value.chon_sp == true) {
                    tmp = tmp + value.thanh_tien;
                }
            })
            this.tong_tien = tmp;
            // this.tong_khuyen_mai = 
        },
        updateGioHang(value) {
            baseRequest
                .post('trang-chu/update-gio-hang', value)
                .then((res) => {
                    if (res.data.status) {
                        toastr.success(res.data.message);
                        this.callListSanPhamGioHang();
                    } else {
                        toastr.error(res.data.message);
                    }
                });
        },
        xoaGioHang(value) {
            baseRequest
                .post('trang-chu/xoa-gio-hang', value)
                .then((res) => {
                    if (res.data.status) {
                        toastr.success(res.data.message);
                        this.callListSanPhamGioHang();
                    } else {
                        toastr.error(res.data.message);
                    }
                })
        },
        muaHang() {
            var list_chon = [];
            this.list_gio_hang.forEach((value, key) => {
                if (value.chon_sp && value.chon_sp == true) {
                    list_chon.push(value);
                }
            });
            var payload = {
                'ds_mua_sp': list_chon,
            };
            baseRequest
                .post('gio-hang/list-chon-san-pham', payload)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        alert("Đây là một cảnh báo");
                        this.loadDataGioHang();
                    } else {
                        // toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        }
    },
}
</script>
<style>
.tongtien {
    /* position: fixed;
    top: -4;
    right: -1;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    padding: 10px;
    width: 27%; */
}

.my-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: black;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
}

.my-btnGH {
    background-color: gray;
    color: #fff;
    font-size: 16px;
    width: 40px;
}

.my-button:hover {
    background-color: green
}

.my-button1 {
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

.para-giohang {
    font-size: 20px;
}

.thanhtien {
    margin-right: 20px
}

.content {
    margin-right: 20px
}

.title-thanhToan {
    font-size: 30px;
    margin: auto;
    color: black;
    margin-top: 20px;
}

.content-1 {
    text-align: center;
    font-size: 30px;
    color: black;
    margin-top: 50px;
    margin-bottom: 50px
}
</style>