import axios from "axios";
const apiUrl = 'http://127.0.0.1:8000/api/';
// import { createToaster } from "@meforma/vue-toaster";
// const toaster = createToaster({ position: "top-right" });

export default {
    getHeader() {
        let token = window.localStorage.getItem('chia_khoa_16');
        if (token == null) {
            return {}
        }
        return { Authorization: 'Bearer ' + token }
    },
    get(url) {
        return axios.get(apiUrl + url, { headers: this.getHeader() });
    },
    post(url, data) {
        return axios.post(apiUrl + url, data, { headers: this.getHeader() });
    },
    delete(url) {
        return axios.delete(apiUrl + url, { headers: this.getHeader() });
    },
    put(url, data) {
        return axios.put(apiUrl + url, data, { headers: this.getHeader() });
    },
}