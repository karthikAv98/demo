import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./assets/main.css";

import clickOutsideDirective from "./directive/click_outside";

const app = createApp(App);

app.directive('click-outside', clickOutsideDirective)
app.use(createPinia());
app.use(router);

app.mount("#app");
