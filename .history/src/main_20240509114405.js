import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './Layout/Wrapper/MasterClient.vue'
import Default from './Layout/Wrapper/MasterClient.vue'

import Auth from './Layout/Wrapper/AuthMaster.vue'
import Toaster from "@meforma/vue-toaster"
const app = createApp(App)

app.use(router, Toaster)
app.component("default-layout", Default);
app.component("auth-layout", Auth);

app.mount("#app")