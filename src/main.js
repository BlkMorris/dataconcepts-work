import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import VueParallaxJs from "vue-parallax-js";
import VueParticles from "vue-particles";
import VueFullPage from "vue-fullpage.js";
import "fullpage.js/vendors/scrolloverflow";

Vue.use(VueFullPage);

Vue.use(VueParticles);
Vue.use(VueParallaxJs);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      once: true
    });
  },
  router,
  render: h => h(App)
}).$mount("#app");
