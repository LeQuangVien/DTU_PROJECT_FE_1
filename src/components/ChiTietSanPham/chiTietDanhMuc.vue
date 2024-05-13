<template>
    <div class="containerr">
        <div class="row">
            <div class="text-center">
                <h4 class="mt-4 mb-5" style="text-transform: uppercase;">Danh Sách Sản Phẩm <span style="color: red">{{
                    danh_muc.ten_danh_muc
                }}</span></h4>
            </div>
            <div class=" row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 product-grid ">
                <template v-for=" (value, index) in list" :key="index">
                    <div class="col">
                        <router-link :to="'/chi-tiet-san-pham/' + value.id + '-' + value.slug_san_pham">
                            <div class="card">
                                <a href="">
                                    <div class="card-header" style="height: 360px;">
                                        <img style="height: 100%; width: 100%;" v-bind:src="value.hinh_anh" alt="">
                                    </div>
                                    <div class="card-body">
                                        <div>
                                            <b style="font-size: 15px;">{{ value.ten_san_pham }}</b>
                                            <div>
                                                <button class="btn-white"
                                                    style="margin-right: 10px; font-size: 13px;">32GB</button>
                                                <button class="btn-white"
                                                    style="margin-right: 10px; font-size: 13px;">32GB</button>
                                                <button class="btn-white" style="font-size: 13px;">32GB</button>
                                            </div>
                                            <span style="font-size: 15px; margin-top: 10px; "
                                                class=" text-decoration-line-through text-secondary">{{
                    formatToVND(value.gia_ban)
                }}</span>&nbsp;
                                            <span class="price" style="color: red">{{
                                                formatToVND(value.gia_khuyen_mai)
                                                }}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </router-link>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import baseRequest from '../../core/baseRequest'
export default {
    props: ['id_danh_muc', 'slug_danh_muc'],
    data() {
        return {
            list: [],
            id_danh_muc: null,
            danh_muc: {},
        }
    },
    mounted() {
        this.id_danh_muc = this.$route.params.id_danh_muc;
        this.loadDanhMuc();
    },
    beforeRouteUpdate(to, from, next) {
        this.id_danh_muc = to.params.id_danh_muc;
        this.loadDanhMuc();
        next();
    },
    methods: {
        formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },
        loadDanhMuc() {
            baseRequest
                .get('danh-muc/danh-sach-san-pham/' + this.id_danh_muc)
                .then((res) => {
                    this.list = res.data.data;
                    this.danh_muc = res.data.danh_muc;
                })
        }
    },
}
</script>
<style>
.containerr {
    margin: 0 auto;
    /* Đặt margin trên và dưới là 0, margin bên trái và phải là auto */
    max-width: 1170px;
    /* Cỡ lớn nhất của phần tử */
}

.card {
    background-color: #f1f1f1
}
</style>