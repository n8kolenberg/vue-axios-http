import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://vue-test-21c75.firebaseio.com';
//Check the following in the get requests when you run the application
axios.defaults.headers.common['Authorization'] = "N8Dawg";
axios.defaults.headers.get['Accept'] = "application/json";


new Vue({
  el: '#app',
  render: h => h(App)
})
