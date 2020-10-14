import Vue from 'vue'
import App from './App'
// import uma from './uma';
// #ifndef H5
import './utils/ald-stat'
// #endif
// Vue.prototype.uma = uma;

Vue.config.productionTip = false
Vue.prototype.baseUrl = 'https://play.tinytiger.cn/data_storage/'
// Vue.prototype.baseUrl = 'http://192.168.1.249/data_storage/'

App.mpType = 'app'

const app = new Vue({
 ...App
})
app.$mount()