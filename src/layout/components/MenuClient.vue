<template>
    <div class="d-flex justify-content-around nav-container">
        <div class="div">
            <img style="height: 50px;" src="https://shopdienthoai.netlify.app/img/logo/logo.png" alt="">
        </div>
        <div class="primary-menu" style="margin-left: 30px;">
            <nav class="navbar navbar-expand-xl w-100">
                <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                    <li class="nav-item">
                        <router-link to="/">
                            <a class="nav-link" href="/">
                                <div class="menu-title"><b>Trang Chủ</b></div>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                            data-bs-toggle="dropdown">
                            <div class="menu-title"><b>Hãng Điện Thoại</b></div>
                        </a>
                        <ul class="dropdown-menu">
                            <template v-for="(v, k) in list_danh_muc" :key="k">
                                <router-link :to="'/danh-sach-san-pham/' + v.id + '-' + v.slug_danh_muc">
                                    <a class="dropdown-item">
                                        <p class="paraDanhMuc"> {{ v.ten_danh_muc }}</p>
                                    </a>
                                </router-link>
                            </template>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                            data-bs-toggle="dropdown">
                            <div class="menu-title"><b>Loại Sản Phẩm</b></div>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="index2.html"><b class="item">Cao Cấp</b></a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="index2.html"><b class="item">Tầm Trung</b></a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="index2.html"><b class="item">Cơ Bản</b></a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link to="/tin-tuc-con-nghe">
                            <a class="nav-link" href="/tin-tuc-con-nghe">
                                <div class="menu-title"><b>Tin Công Nghệ</b></div>
                            </a>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="div">
            <div class="input-group mb-3 mt-2">
                <input type="text" class="form-control" placeholder="Tìm Kiếm Sản Phẩm"
                    aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i
                        class="fa-solid fa-magnifying-glass"></i></button>
            </div>

        </div>

    </div>
</template>
<script>
import baseRequest from '../../core/baseRequest'
export default {
    data() {
        return {
            list_danh_muc: [],
        }
    },
    mounted() {
        this.listDanhMuc();
    },
    methods: {
        listDanhMuc() {
            baseRequest
                .get('danh-muc/selectDanhmuc')
                .then((res) => {
                    this.list_danh_muc = res.data.data
                })
        }
    },
}
</script>
<style>
.paraDanhMuc:hover {
    color: red;
}

.menu-title {
    font-size: 17px;
    margin-right: 10px;
}

.dropdown-menu:hover {
    /* background-color: transparent; */
}

.item {
    color: rgb(95, 92, 92);
    font-size: 16px;
}

.dropdown-item {
    margin-top: 8px;
    /* font-size: ; */
}
</style>