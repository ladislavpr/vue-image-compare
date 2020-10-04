import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './app.vue'
import './tracker'

Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({ render: h => h(App) }).$mount('#app')
