<template>
    <div class="row">
        <div class="col-md-4 border-end">
            <img style="margin-left: 110px; height: 60%;" v-bind:src="san_pham_chi_tiet.hinh_anh" class="img-fluid"
                alt="...">
            <div class="row">
                <div class="col-6 mt-4">
                    <i class="fa-solid fa-taxi" style="margin-left: 106px;"></i>
                    <p style="margin-left: 30px;">Giao Hàng Nhanh Chóng</p>
                </div>
                <div class="col-6 mt-4">
                    <i class="fa-solid fa-rotate-left" style="margin-left: 50px;"></i>
                    <p style="font-size: 15px;">Dể Dàng Hoàn Trả</p>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h4 class="card-title">{{ san_pham_chi_tiet.ten_san_pham }}</h4>
                <div class="d-flex gap-3 py-3">
                    <div class="cursor-pointer">
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-warning"></i>
                        <i class="bx bxs-star text-secondary"></i>
                    </div>
                    <div>142 reviews</div>
                    <div class="text-success"><i class="bx bxs-cart-alt align-middle"></i> 134 orders</div>
                </div>
                <div class="mb-3">
                    <span class="price h4 me-2 text-decoration-line-through text-secondary">{{
                formatToVND(san_pham_chi_tiet.gia_ban) }}</span> &nbsp; &nbsp;
                    <span class="price h4" style="color: red;">{{ formatToVND(san_pham_chi_tiet.gia_khuyen_mai)
                        }}</span>
                </div>
                <p class="card-text fs-6">{{ san_pham_chi_tiet.mo_ta }}</p>
                <dl class="row">
                    <div class="col-lg-6">
                        <h6 class="h6-text">Lựa Chọn Về Dung Lượng</h6>
                        <select class="form-control" style="width: 80px; margin-left: 15px">
                            <option value="">32GB</option>
                            <option value="">64GB</option>
                            <option value="">128GB</option>
                        </select>
                    </div>
                    <div class="col-lg-6">
                        <h6 class="h6-text">Lựa Chọn Về Màu Sắc</h6>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                value="option1">
                            <label class="form-check-label" for="inlineRadio1">Xám</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                value="option2">
                            <label class="form-check-label" for="inlineRadio2">Đen</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                value="option3">
                            <label class="form-check-label" for="inlineRadio3">Trắng</label>
                        </div>
                    </div>
                </dl>
                <hr>
                <div class="row row-cols-auto row-cols-1 row-cols-md-3 align-items-center">
                    <div class="col">
                        <label class="form-label">Số Lượng</label>
                        <div class="input-group input-spinner">
                            <button class="my-button1" type="button" id="button-plus"> + </button>
                            <input type="text" class="form-control" value="1">
                            <button class="my-button1" type="button" id="button-minus"> − </button>
                        </div>
                    </div>
                </div>
                <div class="d-flex gap-3 mt-3">
                    <a href="#" class="my-button-chi-tiet">Mua Ngay</a>
                    <template v-if="is_login == true">
                        <a href="#" class="my-button-chi-tiet2"><span class="text" v-on:click="themVaoGioHang()">Thêm
                                Vào
                                Giỏ Hàng</span> <i class="bx bxs-cart-alt"></i></a>
                    </template>
                    <template v-else>
                        <router-link to="/dang-nhap">
                            <a href="/dang-nhap" class="my-button-chi-tiet2"><span class="text">Thêm
                                    Vào
                                    Giỏ Hàng</span> <i class="bx bxs-cart-alt"></i></a>
                        </router-link>
                    </template>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="card-body">
        <ul class="nav nav-tabs nav-primary mb-0" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab" aria-selected="true">
                    <div class="d-flex align-items-center">
                        <div class="tab-icon"><i class="bx bx-comment-detail font-18 me-1"></i>
                        </div>
                        <div class="tab-title">Mô Tả Chi Tiết</div>
                    </div>
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" data-bs-toggle="tab" href="#primaryprofile" role="tab" aria-selected="false"
                    tabindex="-1">
                    <div class="d-flex align-items-center">
                        <div class="tab-icon"><i class="bx bx-bookmark-alt font-18 me-1"></i>
                        </div>
                        <div class="tab-title">Tags</div>
                    </div>
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" data-bs-toggle="tab" href="#primarycontact" role="tab" aria-selected="false"
                    tabindex="-1">
                    <div class="d-flex align-items-center">
                        <div class="tab-icon"><i class="bx bx-star font-18 me-1"></i>
                        </div>
                        <div class="tab-title">Reviews</div>
                    </div>
                </a>
            </li>
        </ul>
        <div class="tab-content pt-3">
            <div class="tab-pane fade active show" id="primaryhome" role="tabpanel">
                <p>{{ san_pham_chi_tiet.mo_ta_chi_tiet }}</p>
            </div>
            <div class="tab-pane fade" id="primaryprofile" role="tabpanel">
                <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
                    Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four
                    loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk
                    aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore
                    aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente
                    labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard
                    ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher
                    vero sint qui sapiente accusamus tattooed echo park.</p>
            </div>
            <div class="tab-pane fade" id="primarycontact" role="tabpanel">
                <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo
                    retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft
                    beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR
                    banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever
                    gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you
                    probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu
                    synth chambray yr.</p>
            </div>
        </div>
    </div>
    <h6 class="text-uppercase mb-0 mt-2">Related Product</h6>
    <div class="row row-cols-1 row-cols-lg-3 mt-4">
        <template v-for="(value, index) in listSPChiTiet " :key="index">
            <div class="col">
                <router-link :to="'/chi-tiet-san-pham/' + value.id + '-' + value.slug_san_pham">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img style="height: 175px" v-bind:src="value.hinh_anh" class="img-fluid" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h6 class="card-title">{{ value.ten_san_pham }}</h6>
                                    <div class="cursor-pointer my-2">
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-secondary"></i>
                                    </div>
                                    <div class="clearfix">
                                        <p class="mb-0 float-start fw-bold"><span
                                                class="me-2 text-decoration-line-through text-secondary">{{
                formatToVND(value.gia_ban) }}</span><span>{{
                                                formatToVND(value.gia_khuyen_mai) }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </template>

    </div>
</template>
<script>
import baseRequest from '../../core/baseRequest';
import 'toastr/build/toastr.css';
import toastr from 'toastr';
export default {
    props: ['id_san_pham', 'slug_san_pham'],
    data() {
        return {
            id_san_pham: null,
            san_pham_chi_tiet: {},
            listSPChiTiet: [],
            is_login: false,
        }
    },
    mounted() {
        this.id_san_pham = this.$route.params.id_san_pham;
        this.loadChiTietSanPham();
        this.callListSPChiTiet();
        this.checkLogin();
    },
    beforeRouteUpdate(to, from, next) {
        this.id_san_pham = to.params.id_san_pham;
        this.loadChiTietSanPham();
        next();
    },
    methods: {
        formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },
        checkLogin() {
            baseRequest
                .post('khach-hang/check-login')
                .then((res) => {
                    if (res.data.status) {
                        this.is_login = true;
                    }
                })
        },
        callListSPChiTiet() {
            baseRequest
                .get('trang-chu/san-pham/select')
                .then((res) => {
                    this.listSPChiTiet = res.data.listChiTiet
                })
        },
        loadChiTietSanPham() {
            baseRequest
                .get('san-pham/' + this.id_san_pham)
                .then((res) => {
                    this.san_pham_chi_tiet = res.data.data
                })
        },
        themVaoGioHang() {
            var payload = {
                'id_san_pham': this.id_san_pham
            };
            baseRequest
                .post('trang-chu/them-vao-gio-hang', payload)
                .then((res) => {
                    if (res.data.status) {
                        toastr.success(res.data.message);
                    } else {
                        toastr.error(res.data.message);
                    }
                })
        }
    },
}
</script>
<style>
.my-button-chi-tiet2 {
    display: inline-block;
    padding: 10px 20px;
    background-color: rgb(215, 230, 88);
    border-radius: 5px;
    color: black
}

.my-button-chi-tiet {
    display: inline-block;
    padding: 10px 20px;
    background-color: rgb(0, 128, 0);
    color: #fff;
    border-radius: 5px;
}

.my-button-chi-tiet:hover {
    color: black;
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

.h6-text {
    color: red;
}

.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
    transition: border 0.3s;
}

.dark-gray {
    background-color: #555555;
}

.yellow {
    background-color: #FFFF00;
}

.dark-blue {
    background-color: #00008B;
}

.light-gray {
    background-color: #D3D3D3;
}

.circle:hover {
    border: 2px solid black;
}
</style>