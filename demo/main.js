import Vue from 'vue'
import App from './app.vue'
import './tracker'

Vue.config.productionTip = false

new Vue({ render: h => h(App) }).$mount('#app')
