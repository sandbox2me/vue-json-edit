import Vue from 'vue'
// import Vuetify from 'vuetify'
import JsonEditor from '../src/index.js'
import App from './App.vue'

// Vue.use(Vuetify)
Vue.use(JsonEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => (h)(App)
})
