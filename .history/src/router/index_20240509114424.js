import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
import kiemTraKhachHang from "./kiemTraKhachHang";
const routes = [
    {
        path: '/',
        component: () => import('../components/Home/trangChu.vue')
    },
    {
        path: '/tin-tuc-con-nghe',
        component: () => import('../components/Home/tinTucCongNghe.vue')
    },
    {
        path: '/gio-hang',
        component: () => import('../components/KhachHang/gioHang.vue'),
        // meta: { layout: 'client' },
        beforeEnter: kiemTraKhachHang
    },
    {
        path: '/thanh-toan',
        component: () => import('../components/KhachHang/ThanhToan.vue'),
        // meta: { layout: 'client' },
        beforeEnter: kiemTraKhachHang
    },
    {
        path: '/dang-nhap',
        component: () => import('../components/KhachHang/DangNhap/dangNhap.vue'),
        meta: { layout: 'auth' }
    },
    {
        path: '/dang-ky',
        component: () => import('../components/KhachHang/DangKy/index.vue'),
        meta: { layout: 'auth' }
    },
    {
        path: '/chi-tiet-san-pham/:id_san_pham-:slug_san_pham',
        component: () => import('../components/ChiTietSanPham/index.vue'),
        props: true
    },
    {
        path: '/danh-sach-san-pham/:id_danh_muc-:slug_danh_muc',
        component: () => import('../components/ChiTietSanPham/chiTietDanhMuc.vue'),
        props: true
    },
    {
        path: '/proflie',
        component: () => import('../components/KhachHang/profile.vue'),
        meta: { layout: 'client' },
        // beforeEnter: kiemTraKhachHang
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router