import Vue from 'vue'
// import Vuetify from 'vuetify'
import JsonEditor from '../src/index.js'
import App from './App.vue'
// import VueI18n from 'vue-i18n'
 // index.js or main.js
// import('node_modules/vuetify/dist/vuetify.min.css') // Ensure you are using css-loader

// Vue.use(Vuetify)

Vue.use(JsonEditor)

// Vue.use(VueI18n)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => (h)(App)
})
