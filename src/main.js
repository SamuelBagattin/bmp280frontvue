import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/material/material.min.css'
import './assets/css/material/material.min.js'

require('./assets/css/loader.css');
require('./assets/css/index.css');
require('./assets/css/card.css');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
