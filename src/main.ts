import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import pinia from "./store";

import { VueQueryPlugin } from "@tanstack/vue-query";


const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin);
app.use(pinia);
app.mount("#app");