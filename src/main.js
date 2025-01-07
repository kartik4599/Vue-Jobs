import "./assets/main.css";
import "primeicons/primeicons.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import routes from "./routes";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(routes);

app.use(Toast);

app.mount("#app");
