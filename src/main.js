// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/app.scss'

import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import Moment from 'moment'

window.moment = Moment

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDN3nfKEqlBXfs6rYEQpxeYB6x6b_iePno',
    libraries: 'places',
  }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
