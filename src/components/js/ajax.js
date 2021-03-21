import Vue from 'vue'
import ajax from './ajax.vue'
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
    render: h => h(ajax),
}).$mount('#vm')
