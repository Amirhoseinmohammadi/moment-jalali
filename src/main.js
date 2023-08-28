import Vue from "vue"
import App from "./App.vue"
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.component('date-picker', VuePersianDatetimePicker);


import { BootstrapVue, IconsPlugin } from "bootstrap-vue"

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import * as VeeValidate from "vee-validate"
import { extend } from "vee-validate"
import { required, email, alpha } from "vee-validate/dist/rules"

extend("required", {
  ...required,
  message: "This field is required",
})

extend("minmax", {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max
  },
  message: "This field must be number between 1-99",
  params: ["min", "max"],
})

extend("email", {
  ...email,
  message: "please write Email",
})

extend("alpha", {
  ...alpha,
  message: "please write your name without space",
})
Vue.config.productionTip = false
Vue.use(VeeValidate)
Vue.use(BootstrapVue, IconsPlugin)

new Vue({
  render: (h) => h(App),
}).$mount("#app")
